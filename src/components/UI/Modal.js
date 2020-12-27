import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  // shouldComponentUpdate(nextProps,nextState){//Modalがprops.showがtrueのとき,or modalの内容に変更があたとき
  //     return nextProps.show !== this.props.show||nextProps.children !== this.props.children;
  // }

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default React.memo(
  //shouldComponentUpdateと真逆のロジックをセットすれば良い
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
