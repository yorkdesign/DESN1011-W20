var boxes = document.querySelectorAll('.box');
var tooltips = document.querySelectorAll('.tooltip');
var pinkHover = false;

for(i=0; i<tooltips.length; i++) {
    if(tooltips[i].parentNode.classList.contains('static')) {
        var parentTop = tooltips[i].parentNode.offsetTop;
        var parentHeight = tooltips[i].parentNode.offsetHeight;
        var parentBottom = parentTop+parentHeight;
        var parentLeft = tooltips[i].parentNode.offsetLeft;
        tooltips[i].style.top=parentBottom+'px';
        tooltips[i].style.left=parentLeft+'px';
    }
}

document.querySelector('.pink-box').addEventListener('mouseover', function() {
    pinkHover = true;
});

document.querySelector('.pink-box').addEventListener('mouseout', function() {
    pinkHover = false;
});


document.querySelector('.grey-box').addEventListener('mouseover', function() {
    if(pinkHover == true) {
        document.querySelector('.pink-box .tooltip').style.display="inline-block";
    }
    else {
        document.querySelector('.grey-box .tooltip').style.display="inline-block";
        document.querySelector('.pink-box .tooltip').style.display="none";
    }
});

document.querySelector('.grey-box').addEventListener('mouseout', function() {
    document.querySelector('.grey-box .tooltip').style.display="none";
    document.querySelector('.pink-box .tooltip').style.display="none";
});