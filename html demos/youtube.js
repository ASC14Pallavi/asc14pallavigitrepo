document.getElementById('addvideobtn').addEventListener(click,function(){
    const videoUrl=document.getElementById('videoUrl').value;
    console.log('Video URL:', videoUrl);

    const videoId=videoUrl.split('v=')[1];
    console.log('Video ID:', videoId);
     
    if (!videoId) {
        alert('Invalid YouTube URL');
        return;
    }
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log('Embed URL:', embedUrl);

    const iframe=document.createElement('iframe')
     iframe.width='560';
     iframe.height='315';
     iframe.src= embedUrl;
     iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
     iframe.allowFullscreen=true;

     document.getElementById('video_container').appendChild(iframe);
});