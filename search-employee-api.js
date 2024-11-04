import http from 'k6/http';
import { check } from 'k6';
import { buildQueryString } from './helpers.js'

const API_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees';
const COOKIE = 'orangehrm=n0mor0e22h6b2num8egvpjkebo';
const filters = {
  limit: 50,
  offset: 0,
  model: 'detailed',
  includeEmployees: 'onlyCurrent',
  sortField: 'employee.firstName',
  sortOrder: 'ASC',
};

export const options = {
  // 65 users every 20 seconds
  vus: 65,
  duration: '20s',
  thresholds: {
    // 95% of requests must complete within 500ms
    http_req_duration: ['p(95)<500'],
    // errors should be less than 1%
    http_req_failed: ['rate<0.01'],
  },
}

export default function start () {
  const paramsAsString = buildQueryString(filters);
  const API_WITH_FILTERS = `${API_URL}?${paramsAsString}`;

  const response = http.get(API_WITH_FILTERS, {
    headers: {  'Cookie': COOKIE },
  });

  check(response, {
    'status is 200': (r) => r.status === 200,
  });

}
