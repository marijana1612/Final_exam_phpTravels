import { startOfDay } from "date-fns"

const tours = {
    title: 'FIND BEST TOURS PACKAGES TODAY',
}

const destination = 'Belgrade'
const onDate = startOfDay(new Date(2022, 7, 28))

const selector = 'div[class="card-body p-0"]:first select[name=group_id] option'
const totalNumber = Cypress.$(selector).length
const totalInBelgrade = ' Total ' + totalNumber + '  Tours in belgrade'

const toursResult = {
    title: 'Search Tours in belgrade',
    date: 'Date ( 28-07-2022 )',
    travellers: '1 Adults 0 Childs'
}

export { tours, destination, onDate, totalInBelgrade, toursResult }