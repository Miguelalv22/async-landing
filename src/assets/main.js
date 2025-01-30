const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCU5518XN6HWACSTgllqU9Xw&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '16f7f00c80mshdc241efb23086b0p102bb5jsnbe948ef9d0e1',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.contents.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.video.thumbnails[0].url}" alt="${video.video.title}"class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.video.title} cola
                    </h3>
                </div>
            </div>
        `).slice(0, 3).join('')}
        `;
        content.innerHTML = view;

    }
    catch (error) {
        console.log(error)
    }
})();