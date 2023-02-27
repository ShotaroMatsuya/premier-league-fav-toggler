// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MockDate from 'mockdate';
// src/setupTest.js
import { server } from './mocks/server';
// Establish  API mocking before all tests.
beforeAll(() => server.listen());
beforeEach(() => {
  MockDate.set('2023-02-27');
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  MockDate.reset();
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
