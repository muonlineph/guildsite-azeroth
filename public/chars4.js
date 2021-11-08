if (document.images) { 
	tarrent_off= new Image(118,82); 
	tarrent_off.src= 'tarrent-off.jpg' ; 

	tarrent_ovr= new Image(108,66); 
	tarrent_ovr.src= 'tarrent.gif';


        reiz_off= new Image(118,82); 
	reiz_off.src= 'reiz-off.jpg' ; 

	reiz_ovr= new Image(108,66); 
	reiz_ovr.src= 'reiz.gif';



        hellios_off= new Image(118,82); 
	hellios_off.src= 'hellios-off.jpg' ; 

	hellios_ovr= new Image(108,66); 
	hellios_ovr.src= 'hellios.gif';


 
        avatarr_off= new Image(118,82); 
	avatarr_off.src= 'avatarr-off.jpg' ; 

	avatarr_ovr= new Image(108,66); 
	avatarr_ovr.src= 'avatarr.gif';



        tarrant_off= new Image(118,82); 
	tarrant_off.src= 'tarrant-off.jpg' ; 

	tarrant_ovr= new Image(108,66); 
	tarrant_ovr.src= 'tarrant.gif';

	

function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 

} 


