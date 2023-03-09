const countryCodesJSON = [
{"country":"Botswana","code":"267","iso":"BW"},
{"country":"Burkina Faso","code":"226","iso":"BF"},
{"country":"Cameroon","code":"237","iso":"CM"},
{"country":"Gabon","code":"241","iso":"GA"},
{"country":"Gambia","code":"220","iso":"GM"},
{"country":"Ghana","code":"233","iso":"GH"},
{"country":"Kenya","code":"254","iso":"KE"},
{"country":"Malawi","code":"265","iso":"MW"},
{"country":"Morocco","code":"212","iso":"MA"},
{"country":"Mozambique","code":"258","iso":"MZ"},
{"country":"Namibia","code":"264","iso":"NA"},
{"country":"Niger","code":"227","iso":"NE"},
{"country":"Nigeria","code":"234","iso":"NG"},
{"country":"Rwanda","code":"250","iso":"RW"},
{"country":"Senegal","code":"221","iso":"SN"},
{"country":"Sierra Leone","code":"232","iso":"SL"},
{"country":"South Africa","code":"27","iso":"ZA"},
{"country":"Sudan","code":"249","iso":"SD"},
{"country":"Uganda","code":"256","iso":"UG"},
{"country":"Zambia","code":"260","iso":"ZM"},
{"country":"Zimbabwe","code":"263","iso":"ZW"}]

const countryCodes = countryCodesJSON.map((row, i) => {
    return {
        i: i,
        value: i, 
        label: row.country, 
        type: row.country, 
        code: `+${row.code}`, 
    }
})

export { countryCodes }