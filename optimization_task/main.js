(function () {
    console.time('performance');
    //Create posts
    var dataLength = data.length,
        fragment = document.createDocumentFragment(),
        fragment2 = document.createDocumentFragment(),
        list = window.document.getElementById('timeline_list'),
        timeline = document.getElementById('timeline');
    for (var i = 0; i < dataLength; i++) {
        var post = document.createElement('li'),
            paragraph = document.createElement('p'),
            author = document.createElement('strong'),
            time = document.createElement('time'),
            content = document.createElement('div'),
            dataFromFile = data[i];

            post.className = 'post_style';


        author.innerHTML = dataFromFile.owner;
        time.innerHTML = dataFromFile.date;
        time.className = 'time_style';

        content.innerHTML = dataFromFile.content;

        paragraph.appendChild(author);
        paragraph.appendChild(time);

        fragment2.appendChild(author);
        fragment2.appendChild(content);

        if (dataFromFile.comments) {
            var button = document.createElement('button');

            button.innerHTML = 'comments (' + dataFromFile.comments.length + ')';

            fragment2.appendChild(button);
        }

        post.appendChild(fragment2);

        fragment.appendChild(post);
    }
    list.appendChild(fragment);

    timeline.addEventListener('click', function (event) {
        if(event.target.tagName === 'BUTTON') {
            alert('TODO - comment section');
        }
    });

    console.timeEnd('performance');
})();