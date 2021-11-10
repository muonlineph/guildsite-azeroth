if (document.images) { 
	message_off= new Image(118,82); 
	message_off.src= '../images/enter-site/message.gif'; 

	message_ovr= new Image(108,66); 
	message_ovr.src= '../images/enter-site/message-ovr.jpg'; 



	date_off= new Image(118,82); 
	date_off.src= '../images/enter-site/date-created.gif'; 

	date_ovr= new Image(118,82); 
	date_ovr.src= '../images/enter-site/date-created-ovr.jpg'; 



	dev_off= new Image(118,82); 
	dev_off.src= '../images/enter-site/dev.gif'; 

	dev_ovr= new Image(108,66); 
	dev_ovr.src= '../images/enter-site/dev-ovr.jpg'; 



	enter_off= new Image(118,82); 
	enter_off.src= '../images/enter-site/enter.gif'; 

	enter_ovr= new Image(108,66); 
	enter_ovr.src= '../images/enter-site/enter-ovr.jpg'; 
	

function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 

} 











