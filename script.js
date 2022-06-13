import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const failures = new Rate('failed_requests');

export const options = {
  vus: 100,
  duration: '15s',
  thresholds: {
    failed_requests: ['rate<0.01'],
    http_req_duration: ['p(100)<2000']
  }
};
const baseUrl = 'http://localhost:3000/products';

const randomPorductId = () => Math.floor(Math.random() * 1000000)

export default function () {
  const url = `${baseUrl}/${randomPorductId()}/styles`;
  const result = http.get(url);
  sleep(1);
  check(result, { 
    'status was 200': r => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  failures.add(result.status !== 200);
}
