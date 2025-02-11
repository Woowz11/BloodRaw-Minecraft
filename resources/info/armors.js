ResourcePackInfo_Armors = {};
var RPI = ResourcePackInfo_Armors;
var Path = "textures/armors/";
var SelectedX = 64;
var SelectedY = 32;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra){
	if(Name==""){return;}
	if(Extra==null){Extra = {};}
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

SelectedTexture = "iron"; /* ======================================== */
ADD("iron"      ,0,0);
ADD("iron_pants",0,1);

SelectedTexture = "chain"; /* ======================================== */
ADD("chain"      ,0,0);
ADD("chain_pants",0,1);

SelectedTexture = "gold"; /* ======================================== */
ADD("gold"      ,0,0);
ADD("gold_pants",0,1);

SelectedTexture = "diamond"; /* ======================================== */
ADD("diamond"      ,0,0);
ADD("diamond_pants",0,1);

SelectedTexture = "leather"; /* ======================================== */
ADD("leather"      ,0,0);
ADD("leather_pants",0,1);

ADD("leather_overlay"      ,1,0);
ADD("leather_pants_overlay",1,1);

SelectedTexture = "elytra"; /* ======================================== */
ADD("elytra",0,0);