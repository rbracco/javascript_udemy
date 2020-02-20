const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey:"470024b4",
            s:searchTerm,
        }
    });
    console.log(response.data)
}


const input = document.querySelector('input');

const debounce = (func, interval) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => {
            func.apply(null, args);
        }, interval)
    };
};

const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));