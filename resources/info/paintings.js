ResourcePackInfo_Paintings = {};
var RPI = ResourcePackInfo_Paintings;
var Path = "textures/paintings/";
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

SelectedTexture = "other"; /* ======================================== */
ADD("backside",0,0,4,4);
ADD("update"  ,0,0,4,4,[["Clear"],["Special_Update"],["Overlay","overlay_4x4_update"]]);
ADD("atlas"   ,0,0,16,16,[["Atlas","Paintings"]]);

SelectedTexture = "overlays"; /* ======================================== */
ADD("overlay_1x1",0,0,1,1);
ADD("overlay_2x1",1,0,2,1);
ADD("overlay_4x4",4,0,4,4);

ADD("overlay_1x2",0,1,1,2);
ADD("overlay_2x2",1,1,2,2);

ADD("overlay_4x2",0,3,4,2);

ADD("overlay_4x3",4,4,4,3);

ADD("overlay_4x4_update",0,5,4,4);

var Size = "1x1";
SelectedTexture = Size; /* ======================================== */
ADD("plains"   ,0,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("desert"   ,1,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("pavka"    ,2,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("skull"    ,3,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("red_ring" ,4,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("sunflower",5,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("pisechnik",6,0,n,n,[["Overlay","overlay_"+Size]]);

Size = "2x1";
SelectedTexture = Size; /* ======================================== */
SelectedX = 32;
ADD("island"          ,0,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("sunflower_plains",1,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("xp"              ,2,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("desert_plains"   ,3,0,n,n,[["Overlay","overlay_"+Size]]);

Size = "1x2";
SelectedTexture = Size; /* ======================================== */
SelectedX = 16;
SelectedY = 32;
ADD("mountains"     ,0,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("wind_generator",1,0,n,n,[["Overlay","overlay_"+Size]]);

Size = "2x2";
SelectedTexture = Size; /* ======================================== */
SelectedX = 32;
ADD("cold_lake"      ,0,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("sunny_mountains",1,0,n,n,[["Overlay","overlay_"+Size]]);

Size = "4x4";
SelectedTexture = Size; /* ======================================== */
SelectedX = 64;
SelectedY = 64;
ADD("br_dragonegg"  ,0,0,n,n,[["Overlay","overlay_"+Size]]);
ADD("br_jungle_tree",1,0,n,n,[["Overlay","overlay_"+Size]]);