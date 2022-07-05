const toursPage = {
    title: 'h2.text-center',
    destinationDropDown: '#select2-tours_city-container',
    destinationSearchField: '.select2-search__field',
    searchResult: '[data-select2-id="16"]',
    dateInputField: '#date',
    selectedDate: ':nth-child(5) > :nth-child(5)',
    searchButton: '.ladda-label',
    totalOfToursInfo: '.breadcrumb-list > .list-items > li'
}

const toursResultPage = {
    resultTitle: '.sec__title_list',
    searchedDate: '.left-side-info > div > :nth-child(1)',
    searchedTravellers: '.left-side-info > div > :nth-child(2)'
}

export { toursPage, toursResultPage }