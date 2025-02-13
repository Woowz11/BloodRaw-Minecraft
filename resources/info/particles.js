ResourcePackInfo_Particles = {};
var RPI = ResourcePackInfo_Particles;
var Path = "textures/particles/";
var SelectedX = 16;
var SelectedY = 16;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra){
	if(Name==""){return;}
	if(Extra==null){Extra = [];}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name": Name,
		"Extra": Extra,
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

SelectedTexture = "beams"; /* ======================================== */
ADD("beam"           ,0,0);
ADD("beam_gateway"   ,0,1);
ADD("beam_guardian"  ,0,2);
ADD("beam_endcrystal",0,3,1,16);

SelectedTexture = "shadows"; /* ======================================== */
ADD("shadow",0,0);

SelectedTexture = "leads"; /* ======================================== */
SelectedX = 32;
SelectedY = 32;
ADD("lead",0,0);

SelectedTexture = "xp"; /* ======================================== */
ADD("xp",0,0);

SelectedTexture = "books"; /* ======================================== */
SelectedX = 64;
ADD("book",0,0);

SelectedTexture = "sweep"; /* ======================================== */
SelectedX = 128;
ADD("sweep",0,0);

SelectedTexture = "explosions"; /* ======================================== */
SelectedY = 128;
ADD("explosion",0,0);

SelectedTexture = "flash"; /* ======================================== */
SelectedX = 32;
SelectedY = 32;
ADD("flash",0,0);

SelectedTexture = "fire"; /* ======================================== */
SelectedX = 8;
SelectedY = 8;
ADD("fire" ,0,0);
ADD("magma",1,0);

SelectedTexture = "water"; /* ======================================== */
ADD("watersplash_3",0,0);
ADD("watersplash_1",1,0);
ADD("watersplash_2",2,0);
ADD("watersplash"  ,3,0);
ADD("watersplash_4",4,0);
ADD("watersplash_5",5,0);
ADD("watersplash_6",6,0);

ADD("bubble"       ,0,1);

SelectedTexture = "liquid"; /* ======================================== */
ADD("drop"        ,0,0);
ADD("drop_falling",1,0);
ADD("drop_falled" ,2,0);

SelectedTexture = "clouds"; /* ======================================== */
ADD("cloud_0",0,0);
ADD("cloud_1",1,0);
ADD("cloud_2",2,0);
ADD("cloud_3",3,0);
ADD("cloud_4",4,0);
ADD("cloud_5",5,0);
ADD("cloud_6",6,0);
ADD("cloud"  ,7,0);

SelectedTexture = "hurt"; /* ======================================== */
ADD("damage"    ,0,0);
ADD("angry"     ,1,0);
ADD("crit"      ,2,0);
ADD("crit_magic",3,0);

SelectedTexture = "friendliness"; /* ======================================== */
ADD("heart",0,0);
ADD("happy",1,0);

SelectedTexture = "music"; /* ======================================== */
ADD("note",0,0);

SelectedTexture = "items"; /* ======================================== */
ADD("float",0,0);

SelectedTexture = "endrod"; /* ======================================== */
ADD("endrod_0",0,0);
ADD("endrod_1",1,0);
ADD("endrod_2",2,0);
ADD("endrod_3",3,0);
ADD("endrod_4",4,0);
ADD("endrod_5",5,0);
ADD("endrod_6",6,0);
ADD("endrod"  ,7,0);

SelectedTexture = "enchantmenttable"; /* ======================================== */
ADD("enchantmenttable_up"       ,0 ,0);
ADD("enchantmenttable_down"     ,1 ,0);
ADD("enchantmenttable_jetta"    ,2 ,0);
ADD("enchantmenttable_wotta"    ,3 ,0);
ADD("enchantmenttable_bomb"     ,4 ,0);
ADD("enchantmenttable_zepta"    ,5 ,0);
ADD("enchantmenttable_blocky"   ,6 ,0);
ADD("enchantmenttable_void"     ,7 ,0);
ADD("enchantmenttable_singular" ,8 ,0);
ADD("enchantmenttable_eye"      ,9 ,0);
ADD("enchantmenttable_spin"     ,10,0);
ADD("enchantmenttable_cube"     ,11,0);
ADD("enchantmenttable_func"     ,12,0);
ADD("enchantmenttable_lambda"   ,13,0);
ADD("enchantmenttable_hole"     ,14,0);
ADD("enchantmenttable_right"    ,15,0);
ADD("enchantmenttable_left"     ,16,0);
ADD("enchantmenttable_valve"    ,17,0);
ADD("enchantmenttable_jj"       ,18,0);
ADD("enchantmenttable_dot"      ,19,0);
ADD("enchantmenttable_line"     ,20,0);
ADD("enchantmenttable_selection",21,0);
ADD("enchantmenttable_smile"    ,22,0);
ADD("enchantmenttable_del"      ,23,0);
ADD("enchantmenttable_pc"       ,24,0);
ADD("enchantmenttable_minecraft",25,0);

SelectedTexture = "potion"; /* ======================================== */
ADD("potion_0",0,0);
ADD("potion",  1,0);
ADD("potion_2",2,0);
ADD("potion_3",3,0);
ADD("potion_4",4,0);
ADD("potion_5",5,0);
ADD("potion_6",6,0);
ADD("potion_7",7,0);

SelectedTexture = "potion_instant"; /* ======================================== */
ADD("potion_instant_0",0,0);
ADD("potion_instant_1",1,0);
ADD("potion_instant_2",2,0);
ADD("potion_instant_3",3,0);
ADD("potion_instant_4",4,0);
ADD("potion_instant_5",5,0);
ADD("potion_instant_6",6,0);
ADD("potion_instant",  7,0);

SelectedTexture = "firework"; /* ======================================== */
ADD("firework_0",0,0);
ADD("firework_1",1,0);
ADD("firework_2",2,0);
ADD("firework_3",3,0);
ADD("firework"  ,4,0);
ADD("firework_5",5,0);
ADD("firework_6",6,0);
ADD("firework_7",7,0);