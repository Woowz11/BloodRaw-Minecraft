ResourcePackInfo_AssetsTextures = {};
var RPI = ResourcePackInfo_AssetsTextures;
var ResourceType = "texture";

var Base = "";
var n = null;

function ADD(Condition,Path,Resource){
	if(Condition==null){Condition=false};
	if(RPI[Base]==null){RPI[Base] = [];}
	RPI[Base].push([Condition,Path,[ResourceType,Resource]]);
}

/* ================================================================================================================================================================================ */

Base = "Minecraft";
ADD(true,[ [-1, "blocks/dirt.png"      ],[0, "minecraft/textures/blocks/dirt.png"       ] ],["block","dirt"       ]);
ADD(true,[ [-1, "blocks/stone.png"     ],[0, "minecraft/textures/blocks/stone.png"      ] ],["block","stone"      ]);
ADD(true,[ [-1, "blocks/stonebrick.png"],[0, "minecraft/textures/blocks/cobblestone.png"] ],["block","cobblestone"]);
ADD(true,[ [-1, "blocks/sand.png"      ],[0, "minecraft/textures/blocks/sand.png"       ] ],["block","sand"       ]);
ADD(true,[ [-1, "blocks/glass.png"     ],[0, "minecraft/textures/blocks/glass.png"      ] ],["block","glass"      ]);
ADD(true,[ [-1, "blocks/brick.png"     ],[0, "minecraft/textures/blocks/brick.png"      ] ],["block","bricks"     ]);