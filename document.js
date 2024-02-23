document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Sample list of names
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank'];

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const filteredNames = names.filter(name => name.toLowerCase().includes(query));

        // Display the filtered names in the results list
        displayResults(filteredNames);
    });

    function displayResults(results) {
        // Clear previous results
        searchResults.innerHTML = '';

        if (results.length > 0) {
            results.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result;
                listItem.addEventListener('click', function () {
                    // Set the selected name in the input field
                    searchInput.value = result;
                    // Clear the results list
                    searchResults.innerHTML = '';
                });
                searchResults.appendChild(listItem);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }

    // Hide the results list when clicking outside the search bar
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.search-bar')) {
            searchResults.style.display = 'none';
        }
    });
});
