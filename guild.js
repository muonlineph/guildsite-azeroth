if (document.images) { 

	home_off= new Image(118,82); 
	home_off.src= 'home-off.gif'; 

	home_ovr= new Image(108,66); 
	home_ovr.src= 'home-ovr.gif'; 

	home_act = new Image(118,82);
	home_act.src = 'home-act.gif';



        announce_off= new Image(116,37); 
	announce_off.src= 'announcements-off.gif'; 

	announce_ovr= new Image(116,37); 
	announce_ovr.src= 'announcements-ovr.gif'; 

	announce_act = new Image(116,37);
	announce_act.src = 'announcements-act.gif';
	

	
        events_off= new Image(118,82); 
	events_off.src= 'events-off.gif'; 

	events_ovr= new Image(118,82); 
	events_ovr.src= 'events-ovr.gif'; 

	events_act = new Image(118,82);
	events_act.src = 'events-act.gif';



        allies_off= new Image(118,82); 
	allies_off.src= 'allies-off.gif'; 

	allies_ovr= new Image(118,82); 
	allies_ovr.src= 'allies-ovr.gif'; 

	allies_act = new Image(118,82);
	allies_act.src = 'allies-act.gif';



        guildmaster_off= new Image(118,82); 
	guildmaster_off.src= 'guildmaster-off.gif'; 

	guildmaster_ovr= new Image(108,66); 
	guildmaster_ovr.src= 'guildmaster-ovr.gif'; 

	guildmaster_act = new Image(118,82);
	guildmaster_act.src = 'guildmaster-act.gif';



        
        asstguildmaster_off= new Image(118,82); 
	asstguildmaster_off.src= 'asstguildmaster-off.gif'; 

	asstguildmaster_ovr= new Image(118,82); 
	asstguildmaster_ovr.src= 'asstguildmaster-ovr.gif'; 

	asstguildmaster_act = new Image(118,82);
	asstguildmaster_act.src = 'asstguildmaster-act.gif';



        battlemaster_off= new Image(118,82); 
	battlemaster_off.src= 'battlemaster-off.gif'; 

	battlemaster_ovr= new Image(118,82); 
	battlemaster_ovr.src= 'battlemaster-ovr.gif'; 

	battlemaster_act = new Image(118, 82);
	battlemaster_act.src = 'battlemaster-act.gif';



        guildmembers_off= new Image(118,82); 
	guildmembers_off.src= 'guildmembers-off.gif'; 

	guildmembers_ovr= new Image(118,82); 
	guildmembers_ovr.src= 'guildmembers-ovr.gif'; 

	guildmembers_act = new Image(118,82);
	guildmembers_act.src = 'guildmembers-act.gif';





        scam_off= new Image(118,82); 
	scam_off.src= 'scam-off.gif'; 

	scam_ovr= new Image(118,82); 
	scam_ovr.src= 'scam-ovr.gif'; 

	scam_act = new Image(118,82);
	scam_act.src = 'scam-act.gif';



        links_off= new Image(118,82); 
	links_off.src= 'links-off.gif'; 

	links_ovr= new Image(118,82); 
	links_ovr.src= 'links-ovr.gif'; 

	links_act = new Image(118,82);
	links_act.src = 'links-act.gif';


 

        downloads1_off= new Image(118,82); 
	downloads1_off.src= 'downloads1-off.gif'; 

	downloads1_ovr= new Image(118,82); 
	downloads1_ovr.src= 'downloads1-ovr.gif'; 

	downloads1_act = new Image(118,82);
	downloads1_act.src = 'downloads1-act.gif';





function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 


function mouseClick(myImgName) { 
document[myImgName].src=eval(myImgName+ '_act' ).src; } 
}

