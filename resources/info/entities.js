ResourcePackInfo_Entities = {};
var RPI = ResourcePackInfo_Entities;
var Path = "textures/entities/";
var SelectedX = 64;
var SelectedY = 32;

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

SelectedTexture = "minecarts"; /* ======================================== */
ADD("minecart",0,0);

SelectedTexture = "signs"; /* ======================================== */
ADD("oak_sign",0,0);

SelectedTexture = "arrows"; /* ======================================== */
SelectedY = 64;
ADD("arrow"         ,0,0);
ADD("arrow_poison"  ,0,1);
ADD("arrow_spectral",0,2);

SelectedTexture = "chests"; /* ======================================== */
ADD("chest"       ,0,0);
ADD("chest_double",1,0,2,1);

ADD("chest_trap"       ,0,1);
ADD("chest_trap_double",1,1,2,1);

ADD("chest_xmas"       ,0,2);
ADD("chest_xmas_double",1,2,2,1);

ADD("chest_ender"      ,0,3);

SelectedTexture = "endercrystals"; /* ======================================== */
SelectedX = 128;
ADD("endcrystal",0,0);

SelectedTexture = "armorstands"; /* ======================================== */
SelectedX = 64;
ADD("armorstand",0,0);

SelectedTexture = "boats"; /* ======================================== */
SelectedY = 32;
ADD("boat",0,0);
SelectedX = 128;
SelectedY = 64;
ADD("oak_boat"    ,0,0.5);
ADD("spruce_boat" ,0,1.5);
ADD("birch_boat"  ,0,2.5);
ADD("jungle_boat" ,0,3.5);
ADD("acacia_boat" ,0,4.5);
ADD("darkoak_boat",0,5.5);