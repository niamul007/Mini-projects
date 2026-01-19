export default function filterLocation(locations, continent, country) {
    let results = locations;

    // 1. If continent is provided, filter the list
    if (continent) {
        results = results.filter(
            (loc) => loc.continent.toLowerCase() === continent.toLowerCase()
        );
    }

    // 2. If country is provided, filter the list (even if it was already filtered by continent)
    if (country) {
        results = results.filter(
            (loc) => loc.country.toLowerCase() === country.toLowerCase()
        );
    }

    return results;
}