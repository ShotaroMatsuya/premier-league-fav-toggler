import json
import os
import urllib.request


def lambda_handler(event, context):
    print("====================")
    header = {"x-auth-token": os.environ["X_AUTO_TOKEN"]}
    req_qs = event["queryStringParameters"]
    joined_qs = ""
    if req_qs is not None:
        joined_qs = "?"
        for k, v in dict(req_qs).items():
            joined_qs += "{}={}&".format(k, v)
        joined_qs.rstrip("&")
    req_url = os.environ["API_BASE_URL"] + event["pathParameters"]["proxy"] + joined_qs
    print(req_url)

    req = urllib.request.Request(req_url, headers=header)

    body = ""

    with urllib.request.urlopen(req) as res:
        # resは http.client.HTTPResponse
        body = json.loads(res.read().decode("utf8"))  # レスポンスボディ
        headers = dict(res.getheaders())  # ヘッダー(dict)
        status = res.getcode()  # ステータスコード
    response = {
        "statusCode": status,
        "body": json.dumps(body),
        "headers": {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": False,
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "*",
        },
    }

    return response
