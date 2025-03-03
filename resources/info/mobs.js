ResourcePackInfo_Mobs = {};
var RPI = ResourcePackInfo_Mobs;
var Path = "textures/mobs/";
var SelectedX = 64;
var SelectedY = 32;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra,Info){
	if(Name==""){return;}
	if(Extra==null){Extra = [];}
	if(Info==null){Info = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name" : Name,
		"Extra": Extra,
		"Info" : Info,
		"Texture": {
			"Path": Path+SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	RPI[Name] = Result;
}

/* ================================================================================================================================================================================ */

SelectedTexture = "cats"; /* ======================================== */
ADD("ocelot"     ,0,0);
ADD("cat"        ,0,1);
ADD("cat_siamese",0,2);
ADD("cat_black"  ,0,3);

SelectedTexture = "chickens"; /* ======================================== */
ADD("chicken",0,0);

SelectedTexture = "players"; /* ======================================== */
SelectedY = 64;
ADD("player_old" ,0,0,1,0.5);
ADD("player"     ,0,0);
ADD("player_slim",1,0);

SelectedTexture = "guardians"; /* ======================================== */
ADD("guardian"      ,0,0);
ADD("guardian_elder",1,0);

SelectedTexture = "silverfishes"; /* ======================================== */
SelectedY = 32;
ADD("silverfish",0,0);
ADD("endermite" ,0,1);

SelectedTexture = "squids"; /* ======================================== */
ADD("squid",0,0);

SelectedTexture = "blazes"; /* ======================================== */
ADD("blaze",0,0);

SelectedTexture = "bats"; /* ======================================== */
SelectedY = 64;
ADD("bat",0,0);

SelectedTexture = "golems"; /* ======================================== */
ADD("golem_iron",0,0,2,2);
ADD("golem_snow",0,2);

SelectedTexture = "spiders"; /* ======================================== */
SelectedY = 32;
ADD("spider"     ,0,0,n,n,[["Overlay","spider_eyes"]]);
ADD("spider_cave",0,1,n,n,[["Overlay","spider_eyes"]]);
ADD("spider_eyes",0,2);

SelectedTexture = "slimes"; /* ======================================== */
ADD("slime",0,0);
ADD("magma",0,1);

SelectedTexture = "zombies"; /* ======================================== */
ADD("zombie"         ,0,0,1,2);
ADD("zombie_old"     ,0,0);
ADD("zombie_pig"     ,0,1,1,2);
ADD("zombie_pig_old" ,0,1);
ADD("zombie_husk"    ,0,2,1,2);
ADD("zombie_villager",0,3,1,2);

SelectedTexture = "skeletons"; /* ======================================== */
ADD("skeleton"              ,0,0);
ADD("skeleton_wither"       ,0,1);
ADD("skeleton_stray"        ,0,2);
ADD("skeleton_stray_overlay",0,3);

SelectedTexture = "wolfs"; /* ======================================== */
ADD("wolf"                ,0,0);
ADD("wolf_angry"          ,0,1);
ADD("wolf_pet"            ,0,2);
ADD("wolf_pet_old"        ,0,2,n,n,[["Overlay","wolf_pet_overlay_old"]]);
ADD("wolf_pet_overlay"    ,0,3);
ADD("wolf_pet_overlay_old",0,3,n,n,[["Gradient","redstone_on"]]);

SelectedTexture = "villagers_old"; /* ======================================== */
SelectedY = 64;
ADD("villager_old"                 ,0,0);
ADD("villager_old_zombie"          ,1,0);

ADD("villager_old_farmer"          ,0,1);
ADD("villager_old_farmer_zombie"   ,1,1);

ADD("villager_old_butcher"         ,0,2);
ADD("villager_old_butcher_zombie"  ,1,2);

ADD("villager_old_priest"          ,0,3);
ADD("villager_old_priest_zombie"   ,1,3);

ADD("villager_old_smith"           ,0,4);
ADD("villager_old_smith_zombie"    ,1,4);

ADD("villager_old_librarian"       ,0,5);
ADD("villager_old_librarian_zombie",1,5);

SelectedTexture = "ghasts"; /* ======================================== */
SelectedX = 128;
ADD("ghast"         ,0,0);
ADD("ghast_shooting",1,0);

SelectedTexture = "bears"; /* ======================================== */
ADD("bear_polar",0,0);

SelectedTexture = "endermans"; /* ======================================== */
SelectedX = 64;
SelectedY = 32;
ADD("enderman"     ,0,0,n,n,[["Overlay","enderman_eyes"]]);
ADD("enderman_eyes",0,1);

SelectedTexture = "creepers"; /* ======================================== */
ADD("creeper"      ,0,0);
ADD("creeper_power",0,1);

SelectedTexture = "pigs"; /* ======================================== */
ADD("pig"       ,0,0);
ADD("pig_saddle",0,1);

SelectedTexture = "sheeps"; /* ======================================== */
ADD("sheep"        ,0,0);
ADD("sheep_overlay",0,1);

SelectedTexture = "rabbits"; /* ======================================== */
ADD("rabbit"           ,0,0);
ADD("rabbit_toast"     ,0,1);
ADD("rabbit_black"     ,0,2);
ADD("rabbit_brown"     ,0,3);
ADD("rabbit_gold"      ,0,4);
ADD("rabbit_splotched" ,0,5);
ADD("rabbit_salt"      ,0,6);
ADD("rabbit_caerbannog",0,7);

SelectedTexture = "shulkers"; /* ======================================== */
SelectedY = 64;
ADD("shulker"           ,0,0);
ADD("shulker_projectile",0,1,1,0.5);

SelectedTexture = "dragons"; /* ======================================== */
SelectedX = 256;
SelectedY = 256;
ADD("enderdragon"          ,0,0,n,n,[["Overlay","enderdragon_eyes"]]);
ADD("enderdragon_eyes"     ,1,0);
ADD("enderdragon_exploding",2,0);

SelectedTexture = "cows"; /* ======================================== */
SelectedX = 64;
SelectedY = 32;
ADD("cow"    ,0,0);
ADD("cow_red",0,1);

SelectedTexture = "withers"; /* ======================================== */
SelectedY = 64;
ADD("wither"             ,0,0);
ADD("wither_invulnerable",0,1);
ADD("wither_power"       ,0,2);

SelectedTexture = "illagers"; /* ======================================== */
ADD("witch",0,0,1,2);