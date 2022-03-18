const formId = "1FAIpQLSc22cci7BRvgsamsyxqbG52hoye-68sIU3g-79PwEW8V-1QeA";
const entry1="entry.1599892893"
const entry2="entry.1246358072"
const entry3="entry.1195131859"

const getPath = formId => `https://docs.google.com/forms/d/e/${ formId }/formResponse` ;

const postToGoogleDB = function(data){
    const path = getPath(formId);
    const url = getURL( path, data)
    sendRequest('POST', url)
        .then(responseEvent);
}

const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const getURL = function(path, params){
    const url = new URL(path);
    for(let key in params){
        url.searchParams.set(key, params[key]);

    }
    return url;
}

const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const responseEvent = response => alert('Message Sent!')