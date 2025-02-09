ResourcePackInfo_Other = {}

var SelectedTexture = "";

function ADD(TextureName,x,y,w,h,Extra){
	if(TextureName==""){return;}
	if(Extra==null){Extra = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= 16;} if(y!=null){y *= 16;} if(w!=null){w *= 16;} if(h!=null){h *= 16;}
	var Result = {
		"Name": TextureName,
		"Extra": Extra,
		"Texture": {
			"Path": SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	ResourcePackInfo_Other[TextureName] = Result;
}

/* ================================================================================================================================================================================ */

SelectedTexture = "other"; /* ======================================== */
ADD(""        ,0,0);
ADD("empty"   ,0,0);
ADD("notfound",1,0);