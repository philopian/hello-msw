import { HttpResponse, http } from 'msw'

import config from '../../config'
import data from './data/spaceX.json'

const paths = {
  launches: {
    GET: `${config.api.baseUrl}/launches/latest`,
  },
}
console.log(paths.launches.GET)

// https://api.spacexdata.com/v5/launches/latest

const handlers = [
  http.get(paths.launches.GET, () => {
    return HttpResponse.json(data.launches)
  }),

  http.get(paths.launches.GET, ({ request, params, cookies }) => {
    // Get path params
    const routeParams = params
    console.log('routeParams', routeParams)

    // Get query params
    const queryStrings = request.url.searchParams.get('limit')
    console.log('queryStrings', queryStrings)

    // Get body
    const body = JSON.parse(request.body)
    console.log('body', body)

    return HttpResponse.json(data.launches)
  }),
]
export default handlers
