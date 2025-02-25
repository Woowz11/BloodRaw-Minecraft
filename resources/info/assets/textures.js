ResourcePackInfo_AssetsTextures = {};
var RPI = ResourcePackInfo_AssetsTextures;
var ResourceType = "texture";

var Base = "";
var n = null;

function ADD(Resource,Path,Condition){
	if(Condition==null){Condition=true};
	if(RPI[Base]==null){RPI[Base] = [];}
	RPI[Base].push([[ResourceType,Resource],Path,Condition]);
}

/* ================================================================================================================================================================================ */

var To  = "other";
var Tb  = "block";
var Te  = "entity";
var Ten = "environment";
var Tp  = "particle";
var Tg  = "gui";
var Tpa = "painting";
var Ta  = "armor";

var png     = ".png";
var b       = "blocks/";
var i       = "items/";
var mt      = "minecraft/textures/";
var mtb     = mt+"blocks/";
var mti     = mt+"items/";
var mte     = mt+"environment/";
var mtf     = mt+"font/";
var mten    = mt+"entity/";
var mtp     = mt+"particle/";
var mtpaint = mt+"painting/";
var mtg     = mt+"gui/";
var mtm     = mt+"misc/";
var mta     = mt+"models/armor/";

/* Блоки Minecraft */ /* ======================================== */
Base = "Minecraft";
var T = "block";
var a = b;
var ma = mtb;

/* Камень */
ADD([T,"stone"              ],[ [-1,a+"stone"+png                   ],[0,ma+"stone"+png      ] ]);
ADD([T,"stone_smooth"       ],[ [-1,a+"stoneslab_top"+png           ],[0,ma+"stone_slab_top"+png] ]);
ADD([T,"slab_stone"         ],[ [-1,a+"stoneslab_side"+png          ],[0,ma+"stone_slab_side"+png] ]);
ADD([T,"cobblestone"        ],[ [-1,a+"stonebrick"+png              ],[0,ma+"cobblestone"+png] ]);
ADD([T,"cobblestone_moss"   ],[ [-1,a+"stoneMoss"+png               ],[0,ma+"cobblestone_mossy"+png] ]);
ADD([T,"bricks_stone"       ],[ [-1,a+"stonebricksmooth"+png        ],[0,ma+"stonebrick"+png] ]);
ADD([T,"bricks_stone_crack" ],[ [-1,a+"stonebricksmooth_cracked"+png],[0,ma+"stonebrick_cracked"+png] ]);
ADD([T,"bricks_stone_moss"  ],[ [-1,a+"stonebricksmooth_mossy"+png  ],[0,ma+"stonebrick_mossy"+png] ]);
ADD([T,"bricks_stone_carved"],[ [-1,a+"stonebricksmooth_carved"+png ],[0,ma+"stonebrick_carved"+png] ]);
ADD([T,"bedrock"            ],[ [-1,a+"bedrock"+png                 ],[0,ma+"bedrock"+png] ]);
ADD([T,"gravel"             ],[ [-1,a+"gravel"+png                  ],[0,ma+"gravel"+png] ]);
ADD([T,"obsidian"           ],[ [-1,a+"obsidian"+png                ],[0,ma+"obsidian"+png] ]);
ADD([T,"quartz"             ],[ [-1,a+"quartzblock_top"+png         ],[0,ma+"quartz_block_top"+png] ]);
ADD([T,"quartz"             ],[ [-1,a+"quartzblock_side"+png        ],[0,ma+"quartz_block_side"+png] ]);
ADD([T,"quartz_smooth"      ],[ [-1,a+"quartzblock_bottom"+png      ],[0,ma+"quartz_block_bottom"+png] ]);
ADD([T,"quartz_pillar_top"  ],[ [-1,a+"quartzblock_lines_top"+png   ],[0,ma+"quartz_block_lines_top"+png] ]);
ADD([T,"quartz_pillar"      ],[ [-1,a+"quartzblock_lines"+png       ],[0,ma+"quartz_block_lines"+png] ]);
ADD([T,"quartz_carved_top"  ],[ [-1,a+"quartzblock_chiseled_top"+png],[0,ma+"quartz_block_chiseled_top"+png] ]);
ADD([T,"quartz_carved"      ],[ [-1,a+"quartzblock_chiseled"+png    ],[0,ma+"quartz_block_chiseled"+png] ]);

/* Земля */
ADD([T,"dirt"        ],[ [-1,a+"dirt"+png        ],[0,ma+"dirt"+png] ]);
ADD([T,"farmland"    ],[ [-1,a+"farmland_dry"+png],[0,ma+"farmland_dry"+png] ]);
ADD([T,"farmland_wet"],[ [-1,a+"farmland_wet"+png],[0,ma+"farmland_wet"+png] ]);

/* Песок */
ADD([T,"sand"                   ],[ [-1,a+"sand"+png           ],[0,ma+"sand"+png] ]);
ADD([T,"sandstone_smooth"       ],[ [-1,a+"sandstone_top"+png  ],[0,ma+"sandstone_top"+png] ]);
ADD([T,"sandstone"              ],[ [-1,a+"sandstone_side"+png ],[0,ma+"sandstone_normal"+png] ]);
ADD([T,"sandstone"              ],[ [-1,a+"sandstone_bottom"+png],[0,ma+"sandstone_bottom"+png] ]);
ADD([T,"sandstone_smooth_carved"],[ [-1,a+"sandstone_smooth"+png],[0,ma+"sandstone_smooth"+png] ]);
ADD([T,"sandstone_carved"       ],[ [-1,a+"sandstone_carved"+png],[0,ma+"sandstone_carved"+png] ]);

/* Руды */
ADD([T,"ore_coal"    ],[ [-1,a+"oreCoal"+png     ],[0,ma+"coal_ore"+png] ]);
ADD([T,"ore_iron"    ],[ [-1,a+"oreIron"+png     ],[0,ma+"iron_ore"+png] ]);
ADD([T,"ore_gold"    ],[ [-1,a+"oreGold"+png     ],[0,ma+"gold_ore"+png] ]);
ADD([T,"ore_diamond" ],[ [-1,a+"oreDiamond"+png  ],[0,ma+"diamond_ore"+png] ]);
ADD([T,"ore_redstone"],[ [-1,a+"oreRedstone"+png ],[0,ma+"redstone_ore"+png] ]);
ADD([T,"ore_emerald" ],[ [-1,a+"oreEmerald"+png  ],[0,ma+"emerald_ore"+png] ]);
ADD([T,"ore_lapis"   ],[ [-1,a+"oreLapis"+png    ],[0,ma+"lapis_ore"+png] ]);
ADD([T,"ore_quartz"  ],[ [-1,a+"netherquartz"+png],[0,ma+"quartz_ore"+png] ]);

/* Доски */
ADD([T,"oak_planks"   ],[ [-1,a+"wood"+png       ],[0,ma+"planks_oak"+png] ]);
ADD([T,"birch_planks" ],[ [-1,a+"wood_birch"+png ],[0,ma+"planks_birch"+png] ]);
ADD([T,"spruce_planks"],[ [-1,a+"wood_spruce"+png],[0,ma+"planks_spruce"+png] ]);
ADD([T,"jungle_planks"],[ [-1,a+"wood_jungle"+png],[0,ma+"planks_jungle"+png] ]);

/* Глина */
ADD([T,"clay"                ],[ [-1,a+"clay"+png],[0,ma+"clay"+png] ]);
ADD([T,"bricks"              ],[ [-1,a+"brick"+png],[0,ma+"brick"+png] ]);
ADD([T,"hardenedclay"        ],[ [ 0,ma+"hardened_clay"+png] ]);
ADD([T,"hardenedclay_white"  ],[ [ 0,ma+"hardened_clay_stained_white"+png] ]);
ADD([T,"hardenedclay_silver" ],[ [ 0,ma+"hardened_clay_stained_silver"+png] ]);
ADD([T,"hardenedclay_gray"   ],[ [ 0,ma+"hardened_clay_stained_gray"+png] ]);
ADD([T,"hardenedclay_black"  ],[ [ 0,ma+"hardened_clay_stained_black"+png] ]);
ADD([T,"hardenedclay_red"    ],[ [ 0,ma+"hardened_clay_stained_red"+png] ]);
ADD([T,"hardenedclay_orange" ],[ [ 0,ma+"hardened_clay_stained_orange"+png] ]);
ADD([T,"hardenedclay_yellow" ],[ [ 0,ma+"hardened_clay_stained_yellow"+png] ]);
ADD([T,"hardenedclay_aqua"   ],[ [ 0,ma+"hardened_clay_stained_light_blue"+png] ]);
ADD([T,"hardenedclay_blue"   ],[ [ 0,ma+"hardened_clay_stained_blue"+png] ]);
ADD([T,"hardenedclay_purple" ],[ [ 0,ma+"hardened_clay_stained_purple"+png] ]);
ADD([T,"hardenedclay_magenta"],[ [ 0,ma+"hardened_clay_stained_magenta"+png] ]);
ADD([T,"hardenedclay_pink"   ],[ [ 0,ma+"hardened_clay_stained_pink"+png] ]);
ADD([T,"hardenedclay_brown"  ],[ [ 0,ma+"hardened_clay_stained_brown"+png] ]);
ADD([T,"hardenedclay_green"  ],[ [ 0,ma+"hardened_clay_stained_green"+png] ]);
ADD([T,"hardenedclay_cyan"   ],[ [ 0,ma+"hardened_clay_stained_cyan"+png] ]);

/* Стекло */
ADD([T,"glass"     ],[ [-1,a+"glass"+png],[0,ma+"glass"+png] ]);
ADD([T,"glass_pane"],[ [-1,a+"thinglass_top"+png],[0,ma+"glass_pane_top"+png] ]);

/* Металл */
ADD([T,"iron"           ],[ [-1,a+"blockIron"+png      ],[0,ma+"block_iron"+png] ]);
ADD([T,"gold"           ],[ [-1,a+"blockGold"+png      ],[0,ma+"block_gold"+png] ]);
ADD([T,"cauldron_bottom"],[ [-1,a+"cauldron_bottom"+png],[0,ma+"cauldron_bottom"+png] ]);
ADD([T,"cauldron_inner" ],[ [-1,a+"cauldron_inner"+png ],[0,ma+"cauldron_inner"+png] ]);
ADD([T,"cauldron"       ],[ [-1,a+"cauldron_side"+png  ],[0,ma+"cauldron_side"+png] ]);
ADD([T,"cauldron_top"   ],[ [-1,a+"cauldron_top"+png   ],[0,ma+"cauldron_top"+png] ]);
ADD([T,"bars"           ],[ [-1,a+"fenceIron"+png      ],[0,ma+"iron_bars"+png] ]);
ADD([T,"hopper"         ],[ [-1,a+"hopper"+png         ],[0,ma+"hopper"+png] ]);
ADD([T,"hopper_inner"   ],[ [-1,a+"hopper_inside"+png  ],[0,ma+"hopper_inside"+png] ]);
ADD([T,"cauldron_top"   ],[ [-1,a+"hopper_top"+png     ],[0,ma+"hopper_top"+png] ]);

/* Кристаллы/Камни */
ADD([T,"diamond"],[ [-1,a+"blockDiamond"+png],[0,ma+"diamond_block"+png] ]);
ADD([T,"emerald"],[ [-1,a+"blockEmerald"+png],[0,ma+"emerald_block"+png] ]);
ADD([T,"lapis"  ],[ [-1,a+"blockLapis"+png  ],[0,ma+"lapis_block"+png] ]);

/* Редстоун/Механизмы */
ADD([T,"redstone"              ],[ [-1,a+"blockRedstone"+png             ],[0,ma+"redstone_block"+png] ]);
ADD([T,"comparator"            ],[ [-1,a+"comparator"+png                ],[0,ma+"comparator_off"+png] ]);
ADD([T,"comparator_on"         ],[ [-1,a+"comparator_lit"+png            ],[0,ma+"comparator_on"+png] ]);
ADD([T,"lightdetector"         ],[ [-1,a+"daylightDetector_side"+png     ],[0,ma+"daylight_detector_side"+png] ]);
ADD([T,"lightdetector_day"     ],[ [-1,a+"daylightDetector_top"+png      ],[0,ma+"daylight_detector_top"+png] ]);
ADD([T,"dispenser"             ],[ [-1,a+"dispenser_front"+png           ],[0,ma+"dispenser_front_horizontal"+png] ]);
ADD([T,"dispenser_top"         ],[ [-1,a+"dispenser_front_vertical"+png  ],[0,ma+"dispenser_front_vertical"+png] ]);
ADD([T,"dropper"               ],[ [-1,a+"dropper_front"+png             ],[0,ma+"dropper_front_horizontal"+png] ]);
ADD([T,"dropper_top"           ],[ [-1,a+"dropper_front_vertical"+png    ],[0,ma+"dropper_front_vertical"+png] ]);
ADD([T,"lever"                 ],[ [-1,a+"lever"+png                     ],[0,ma+"lever"+png] ]);
ADD([T,"piston"                ],[ [-1,a+"piston_top"+png                ],[0,ma+"piston_top"+png] ]);
ADD([T,"piston_slime"          ],[ [-1,a+"piston_top_sticky"+png         ],[0,ma+"piston_top_sticky"+png] ]);
ADD([T,"piston_side"           ],[ [-1,a+"piston_side"+png               ],[0,ma+"piston_side"+png] ]);
ADD([T,"piston_bottom"         ],[ [-1,a+"piston_bottom"+png             ],[0,ma+"piston_bottom"+png] ]);
ADD([T,"piston_inner"          ],[ [-1,a+"piston_inner_top"+png          ],[0,ma+"piston_inner"+png] ]);
ADD([T,"redstone_cross"        ],[ [-1,a+"redstoneDust_cross"+png        ],[0,ma+"redstone_dust_cross"+png] ]);
ADD([T,"redstone_line"         ],[ [-1,a+"redstoneDust_line"+png         ],[0,ma+"redstone_dust_line"+png] ]);
ADD([T,"redstone_cross_overlay"],[ [-1,a+"redstoneDust_cross_overlay"+png],[0,ma+"redstone_dust_cross_overlay"+png] ]);
ADD([T,"redstone_line_overlay" ],[ [-1,a+"redstoneDust_line_overlay"+png ],[0,ma+"redstone_dust_line_overlay"+png] ]);
ADD([T,"lamp"                  ],[ [-1,a+"redstoneLight"+png             ],[0,ma+"redstone_lamp_off"+png] ]);
ADD([T,"lamp_on"               ],[ [-1,a+"redstoneLight_lit"+png         ],[0,ma+"redstone_lamp_on"+png] ]);
ADD([T,"torch_redstone_off"    ],[ [-1,a+"redtorch"+png                  ],[0,ma+"redstone_torch_off"+png] ]);
ADD([T,"torch_redstone"        ],[ [-1,a+"redtorch_lit"+png              ],[0,ma+"redstone_torch_on"+png] ]);
ADD([T,"repeater"              ],[ [-1,a+"repeater"+png                  ],[0,ma+"repeater_off"+png] ]);
ADD([T,"repeater_on"           ],[ [-1,a+"repeater_lit"+png              ],[0,ma+"repeater_on"+png] ]);
ADD([T,"string"                ],[ [-1,a+"tripWire"+png                  ],[0,ma+"trip_wire"+png] ]);
ADD([T,"trip"                  ],[ [-1,a+"tripWireSource"+png            ],[0,ma+"trip_wire_source"+png] ]);

/* Мебель/Декорации */
ADD([T,"bed_foot_end"    ],[ [-1,a+"bed_feet_end"+png  ],[0,ma+"bed_feet_end"+png] ]);
ADD([T,"bed_foot_side"   ],[ [-1,a+"bed_feet_side"+png ],[0,ma+"bed_feet_side"+png] ]);
ADD([T,"bed_foot"        ],[ [-1,a+"bed_feet_top"+png  ],[0,ma+"bed_feet_top"+png] ]);
ADD([T,"bed_head_end"    ],[ [-1,a+"bed_head_end"+png  ],[0,ma+"bed_head_end"+png] ]);
ADD([T,"bed_head_side"   ],[ [-1,a+"bed_head_side"+png ],[0,ma+"bed_head_side"+png] ]);
ADD([T,"bed_head"        ],[ [-1,a+"bed_head_top"+png  ],[0,ma+"bed_head_top"+png] ]);
ADD([T,"bookshelf"       ],[ [-1,a+"bookshelf"+png     ],[0,ma+"bookshelf"+png] ]);
ADD([T,"iron_door"       ],[ [-1,a+"doorIron_upper"+png],[0,ma+"door_iron_upper"+png] ]);
ADD([T,"iron_door_bottom"],[ [-1,a+"doorIron_lower"+png],[0,ma+"door_iron_lower"+png] ]);
ADD([T,"oak_door"        ],[ [-1,a+"doorWood_upper"+png],[0,ma+"door_wood_upper"+png] ]);
ADD([T,"oak_door_bottom" ],[ [-1,a+"doorWood_lower"+png],[0,ma+"door_wood_lower"+png] ]);
ADD([T,"pot"             ],[ [-1,a+"flowerPot"+png     ],[0,ma+"flower_pot"+png] ]);
ADD([T,"ladder"          ],[ [-1,a+"ladder"+png        ],[0,ma+"ladder"+png] ]);
ADD([T,"itemframe"       ],[ [-1,a+"itemframe_back"+png],[0,ma+"itemframe_background"+png] ]);
ADD([T,"jukebox"         ],[ [-1,a+"jukebox_top"+png   ],[0,ma+"jukebox_top"+png] ]);
ADD([T,"noteblock"       ],[ [-1,a+"musicBlock"+png    ],[0,ma+"noteblock"+png] ]);
ADD([T,"jukebox_side"    ],[ [ 0,ma+"jukebox_side"+png] ]);
ADD([T,"torch"           ],[ [-1,a+"torch"+png         ],[0,ma+"torch_on"+png] ]);
ADD([T,"oak_trapdoor"    ],[ [-1,a+"trapdoor"+png      ],[0,ma+"trapdoor"+png] ]);

/* Трава */
ADD([T,"grass"             ],[ [-1,a+"grass_top"+png],[0,ma+"grass_top"+png] ]);
ADD([T,"grass_side"        ],[ [-1,a+"grass_side"+png],[0,ma+"grass_side"+png] ]);
ADD([T,"grass_side_overlay"],[ [-1,a+"grass_side_overlay"+png],[0,ma+"grass_side_overlay"+png] ]);
ADD([T,"mycelium"          ],[ [-1,a+"mycel_top"+png],[0,ma+"mycelium_top"+png] ]);
ADD([T,"mycelium_side"     ],[ [-1,a+"mycel_side"+png],[0,ma+"mycelium_side"+png] ]);

/* Деревья */
ADD([T,"oak_top"           ],[ [-1,a+"tree_top"+png],[0,ma+"log_oak_top"+png] ]);
ADD([T,"oak"               ],[ [-1,a+"tree_side"+png],[0,ma+"log_oak"+png] ]);
ADD([T,"birch_top"         ],[ [ 0,ma+"log_birch_top"+png] ]);
ADD([T,"birch"             ],[ [-1,a+"tree_birch"+png],[0,ma+"log_birch"+png] ]);
ADD([T,"spruce_top"        ],[ [ 0,ma+"log_spruce_top"+png] ]);
ADD([T,"spruce"            ],[ [-1,a+"tree_spruce"+png],[0,ma+"log_spruce"+png] ]);
ADD([T,"jungle_top"        ],[ [ 0,ma+"log_jungle_top"+png] ]);
ADD([T,"jungle"            ],[ [-1,a+"tree_jungle"+png],[0,ma+"log_jungle"+png] ]);
ADD([T,"oak_leaves"        ],[ [-1,a+"leaves"+png],[0,ma+"leaves_oak"+png] ]);
ADD([T,"oak_leaves_fast"   ],[ [-1,a+"leaves_opaque"+png],[0,ma+"leaves_oak_opaque"+png] ]);
ADD([T,"birch_leaves"      ],[ [ 0,ma+"leaves_birch"+png] ]);
ADD([T,"birch_leaves_fast" ],[ [ 0,ma+"leaves_birch_opaque"+png] ]);
ADD([T,"jungle_leaves"     ],[ [-1,a+"leaves_jungle"+png],[0,ma+"leaves_jungle"+png] ]);
ADD([T,"jungle_leaves_fast"],[ [-1,a+"leaves_jungle_opaque"+png],[0,ma+"leaves_jungle_opaque"+png] ]);
ADD([T,"spruce_leaves"     ],[ [-1,a+"leaves_spruce"+png],[0,ma+"leaves_spruce"+png] ]);
ADD([T,"spruce_leaves_fast"],[ [-1,a+"leaves_spruce_opaque"+png],[0,ma+"leaves_spruce_opaque"+png] ]);
ADD([T,"oak_sapling"       ],[ [-1,a+"sapling"+png],[0,ma+"sapling_oak"+png] ]);
ADD([T,"birch_sapling"     ],[ [-1,a+"sapling_birch"+png],[0,ma+"sapling_birch"+png] ]);
ADD([T,"spruce_sapling"    ],[ [-1,a+"sapling_spruce"+png],[0,ma+"sapling_spruce"+png] ]);
ADD([T,"jungle_sapling"    ],[ [-1,a+"sapling_jungle"+png],[0,ma+"sapling_jungle"+png] ]);

/* Транспортировка */
ADD([T,"rail_corner"      ],[ [-1,a+"rail_turn"+png],[0,ma+"rail_normal_turned"+png] ]);
ADD([T,"rail"             ],[ [-1,a+"rail"+png],[0,ma+"rail_normal"+png] ]);
ADD([T,"railgold"         ],[ [-1,a+"goldenRail"+png],[0,ma+"rail_golden"+png] ]);
ADD([T,"railgold_on"      ],[ [-1,a+"goldenRail_powered"+png],[0,ma+"rail_golden_powered"+png] ]);
ADD([T,"rail_detector"    ],[ [-1,a+"detectorRail"+png],[0,ma+"rail_detector"+png] ]);
ADD([T,"rail_detector_on" ],[ [-1,a+"detectorRail_on"+png],[0,ma+"rail_detector_powered"+png] ]);
ADD([T,"rail_activator"   ],[ [-1,a+"activatorRail"+png],[0,ma+"rail_activator"+png] ]);
ADD([T,"rail_activator_on"],[ [-1,a+"activatorRail_powered"+png],[0,ma+"rail_activator_powered"+png] ]);

/* Магия */
ADD([T,"beacon"                 ],[ [-1,a+"beacon"+png            ],[0,ma+"beacon"+png] ]);
ADD([T,"enchantmenttable"       ],[ [-1,a+"enchantment_top"+png   ],[0,ma+"enchanting_table_top"+png] ]);
ADD([T,"enchantmenttable_side"  ],[ [-1,a+"enchantment_side"+png  ],[0,ma+"enchanting_table_side"+png] ]);
ADD([T,"enchantmenttable_bottom"],[ [-1,a+"enchantment_bottom"+png],[0,ma+"enchanting_table_bottom"+png] ]);
ADD([T,"brewingstand"           ],[ [-1,a+"brewingStand"+png      ],[0,ma+"brewing_stand"+png] ]);
ADD([T,"brewingstand_base"      ],[ [-1,a+"brewingStand_base"+png ],[0,ma+"brewing_stand_base"+png] ]);

/* Инструменты/Верстаки/Переработчики */
ADD([T,"craftingtable"       ],[ [-1,a+"workbench_top"+png],[0,ma+"crafting_table_top"+png] ]);
ADD([T,"craftingtable_side"  ],[ [-1,a+"workbench_side"+png],[0,ma+"crafting_table_side"+png] ]);
ADD([T,"craftingtable_side_2"],[ [-1,a+"workbench_front"+png],[0,ma+"crafting_table_front"+png] ]);
ADD([T,"furnace"             ],[ [-1,a+"furnace_front"+png],[0,ma+"furnace_front_off"+png] ]);
ADD([T,"furnace_on"          ],[ [-1,a+"furnace_front_lit"+png],[0,ma+"furnace_front_on"+png] ]);
ADD([T,"cobblestone_side"    ],[ [-1,a+"furnace_side"+png],[0,ma+"furnace_side"+png] ]);
ADD([T,"cobblestone_top"     ],[ [-1,a+"furnace_top"+png],[0,ma+"furnace_top"+png] ]);
ADD([T,"anvil"               ],[ [-1,a+"anvil_base"+png         ],[0,ma+"anvil_base"+png] ]);
ADD([T,"anvil_0"             ],[ [-1,a+"anvil_top"+png          ],[0,ma+"anvil_top_damaged_0"+png] ]);
ADD([T,"anvil_1"             ],[ [-1,a+"anvil_top_damaged_1"+png],[0,ma+"anvil_top_damaged_1"+png] ]);
ADD([T,"anvil_2"             ],[ [-1,a+"anvil_top_damaged_2"+png],[0,ma+"anvil_top_damaged_2"+png] ]);

/* Растения */
ADD([T,"cactus_bottom"      ],[ [-1,a+"cactus_bottom"+png],[0,ma+"cactus_bottom"+png] ]);
ADD([T,"cactus"             ],[ [-1,a+"cactus_side"+png],[0,ma+"cactus_side"+png] ]);
ADD([T,"cactus_top"         ],[ [-1,a+"cactus_top"+png],[0,ma+"cactus_top"+png] ]);
ADD([T,"carrot_0"           ],[ [-1,a+"carrots_0"+png],[0,ma+"carrots_stage_0"+png] ]);
ADD([T,"carrot_1"           ],[ [-1,a+"carrots_1"+png],[0,ma+"carrots_stage_1"+png] ]);
ADD([T,"carrot_2"           ],[ [-1,a+"carrots_2"+png],[0,ma+"carrots_stage_2"+png] ]);
ADD([T,"carrot"             ],[ [-1,a+"carrots_3"+png],[0,ma+"carrots_stage_3"+png] ]);
ADD([T,"cocoa_0"            ],[ [-1,a+"cocoa_0"+png],[0,ma+"cocoa_stage_0"+png] ]);
ADD([T,"cocoa_1"            ],[ [-1,a+"cocoa_1"+png],[0,ma+"cocoa_stage_1"+png] ]);
ADD([T,"cocoa"              ],[ [-1,a+"cocoa_2"+png],[0,ma+"cocoa_stage_2"+png] ]);
ADD([T,"wheat_0"            ],[ [-1,a+"crops_0"+png],[0,ma+"wheat_stage_0"+png] ]);
ADD([T,"wheat_1"            ],[ [-1,a+"crops_1"+png],[0,ma+"wheat_stage_1"+png] ]);
ADD([T,"wheat_2"            ],[ [-1,a+"crops_2"+png],[0,ma+"wheat_stage_2"+png] ]);
ADD([T,"wheat_3"            ],[ [-1,a+"crops_3"+png],[0,ma+"wheat_stage_3"+png] ]);
ADD([T,"wheat_4"            ],[ [-1,a+"crops_4"+png],[0,ma+"wheat_stage_4"+png] ]);
ADD([T,"wheat_5"            ],[ [-1,a+"crops_5"+png],[0,ma+"wheat_stage_5"+png] ]);
ADD([T,"wheat_6"            ],[ [-1,a+"crops_6"+png],[0,ma+"wheat_stage_6"+png] ]);
ADD([T,"wheat"              ],[ [-1,a+"crops_7"+png],[0,ma+"wheat_stage_7"+png] ]);
ADD([T,"bush_dead"          ],[ [-1,a+"deadbush"+png],[0,ma+"deadbush"+png] ]);
ADD([T,"fern"               ],[ [-1,a+"fern"+png],[0,ma+"fern"+png] ]);
ADD([T,"tallgrass"          ],[ [-1,a+"tallgrass"+png],[0,ma+"tallgrass"+png] ]);
ADD([T,"flower_dandelion"   ],[ [-1,a+"flower"+png],[0,ma+"flower_dandelion"+png] ]);
ADD([T,"flower_rose"        ],[ [-1,a+"rose"+png],[0,ma+"flower_rose"+png] ]);
ADD([T,"mushroom_brown"     ],[ [-1,a+"mushroom_brown"+png],[0,ma+"mushroom_brown"+png] ]);
ADD([T,"mushroom_red"       ],[ [-1,a+"mushroom_red"+png],[0,ma+"mushroom_red"+png] ]);
ADD([T,"mushroom_stem"      ],[ [-1,a+"mushroom_skin_stem"+png],[0,ma+"mushroom_block_skin_stem"+png] ]);
ADD([T,"mushroom"           ],[ [-1,a+"mushroom_inside"+png],[0,ma+"mushroom_block_inside"+png] ]);
ADD([T,"mushroom_brown_skin"],[ [-1,a+"mushroom_skin_brown"+png],[0,ma+"mushroom_block_skin_brown"+png] ]);
ADD([T,"mushroom_red_skin"  ],[ [-1,a+"mushroom_skin_red"+png],[0,ma+"mushroom_block_skin_red"+png] ]);
ADD([T,"potato_0"           ],[ [-1,a+"potatoes_0"+png],[0,ma+"potatoes_stage_0"+png] ]);
ADD([T,"potato_1"           ],[ [-1,a+"potatoes_1"+png],[0,ma+"potatoes_stage_1"+png] ]);
ADD([T,"potato_2"           ],[ [-1,a+"potatoes_2"+png],[0,ma+"potatoes_stage_2"+png] ]);
ADD([T,"potato"             ],[ [-1,a+"potatoes_3"+png],[0,ma+"potatoes_stage_3"+png] ]);
ADD([T,"stem"               ],[ [-1,a+"stem_straight"+png],[0,ma+"pumpkin_stem_disconnected"+png] ]);
ADD([T,"stem_corner"        ],[ [-1,a+"stem_bent"+png],[0,ma+"pumpkin_stem_connected"+png] ]);
ADD([T,"stem"               ],[ [ 0,ma+"melon_stem_disconnected"+png] ]);
ADD([T,"stem_corner"        ],[ [ 0,ma+"melon_stem_connected"+png] ]);
ADD([T,"pumpkin_face"       ],[ [-1,a+"pumpkin_face"+png],[0,ma+"pumpkin_face_off"+png] ]);
ADD([T,"pumpkin_face_on"    ],[ [-1,a+"pumpkin_jack"+png],[0,ma+"pumpkin_face_on"+png] ]);
ADD([T,"pumpkin"            ],[ [-1,a+"pumpkin_side"+png],[0,ma+"pumpkin_side"+png] ]);
ADD([T,"pumpkin_top"        ],[ [-1,a+"pumpkin_top"+png],[0,ma+"pumpkin_top"+png] ]);
ADD([T,"watermelon_top"     ],[ [-1,a+"melon_top"+png],[0,ma+"melon_top"+png] ]);
ADD([T,"watermelon"         ],[ [-1,a+"melon_side"+png],[0,ma+"melon_side"+png] ]);
ADD([T,"sugarcane"          ],[ [-1,a+"reeds"+png],[0,ma+"reeds"+png] ]);
ADD([T,"vine"               ],[ [-1,a+"vine"+png],[0,ma+"vine"+png] ]);
ADD([T,"waterlily"          ],[ [-1,a+"waterlily"+png],[0,ma+"waterlily"+png] ]);

/*Разноцветное*/
ADD([T,"wool"        ],[ [-1,a+"cloth_0"+png ],[0,ma+"wool_colored_white"+png] ]);
ADD([T,"wool_silver" ],[ [-1,a+"cloth_8"+png ],[0,ma+"wool_colored_silver"+png] ]);
ADD([T,"wool_gray"   ],[ [-1,a+"cloth_7"+png ],[0,ma+"wool_colored_gray"+png] ]);
ADD([T,"wool_black"  ],[ [-1,a+"cloth_15"+png],[0,ma+"wool_colored_black"+png] ]);
ADD([T,"wool_red"    ],[ [-1,a+"cloth_14"+png],[0,ma+"wool_colored_red"+png] ]);
ADD([T,"wool_orange" ],[ [-1,a+"cloth_1"+png ],[0,ma+"wool_colored_orange"+png] ]);
ADD([T,"wool_yellow" ],[ [-1,a+"cloth_4"+png ],[0,ma+"wool_colored_yellow"+png] ]);
ADD([T,"wool_lime"   ],[ [-1,a+"cloth_5"+png ],[0,ma+"wool_colored_lime"+png] ]);
ADD([T,"wool_aqua"   ],[ [-1,a+"cloth_3"+png ],[0,ma+"wool_colored_light_blue"+png] ]);
ADD([T,"wool_blue"   ],[ [-1,a+"cloth_11"+png],[0,ma+"wool_colored_blue"+png] ]);
ADD([T,"wool_purple" ],[ [-1,a+"cloth_10"+png],[0,ma+"wool_colored_purple"+png] ]);
ADD([T,"wool_magenta"],[ [-1,a+"cloth_2"+png ],[0,ma+"wool_colored_magenta"+png] ]);
ADD([T,"wool_pink"   ],[ [-1,a+"cloth_6"+png ],[0,ma+"wool_colored_pink"+png] ]);
ADD([T,"wool_brown"  ],[ [-1,a+"cloth_12"+png],[0,ma+"wool_colored_brown"+png] ]);
ADD([T,"wool_green"  ],[ [-1,a+"cloth_13"+png],[0,ma+"wool_colored_green"+png] ]);
ADD([T,"wool_cyan"   ],[ [-1,a+"cloth_9"+png ],[0,ma+"wool_colored_cyan"+png] ]);

/* Снег */
ADD([T,"ice"            ],[ [-1,a+"ice"+png],[0,ma+"ice"+png] ]);
ADD([T,"snow"           ],[ [-1,a+"snow"+png],[0,ma+"snow"+png] ]);
ADD([T,"grass_side_snow"],[ [-1,a+"snow_side"+png],[0,ma+"grass_side_snowed"+png] ]);

/* Незер */
ADD([T,"netherrack"  ],[ [-1,a+"hellrock"+png],[0,ma+"netherrack"+png] ]);
ADD([T,"soulsand"    ],[ [-1,a+"hellsand"+png],[0,ma+"soul_sand"+png] ]);
ADD([T,"glowstone"   ],[ [-1,a+"lightgem"+png],[0,ma+"glowstone"+png] ]);
ADD([T,"netherbricks"],[ [-1,a+"netherBrick"+png],[0,ma+"nether_brick"+png] ]);
ADD([T,"wart_0"      ],[ [-1,a+"netherStalk_0"+png],[0,ma+"nether_wart_stage_0"+png] ]);
ADD([T,"wart_1"      ],[ [-1,a+"netherStalk_1"+png],[0,ma+"nether_wart_stage_1"+png] ]);
ADD([T,"wart_2"      ],[ [-1,a+"netherStalk_2"+png],[0,ma+"nether_wart_stage_2"+png] ]);

/* Энд */
ADD([T,"endframe"     ],[ [-1,a+"endframe_top"+png],[0,ma+"endframe_top"+png] ]);
ADD([T,"endframe_side"],[ [-1,a+"endframe_side"+png],[0,ma+"endframe_side"+png] ]);
ADD([T,"endframe_eye" ],[ [-1,a+"endframe_eye"+png],[0,ma+"endframe_eye"+png] ]);
ADD([T,"endstone"     ],[ [-1,a+"whiteStone"+png],[0,ma+"end_stone"+png] ]);

/* Необычное */
ADD([T,"destroy_0"],[ [-1,a+"destroy_0"+png],[0,ma+"destroy_stage_0"+png] ]);
ADD([T,"destroy_1"],[ [-1,a+"destroy_1"+png],[0,ma+"destroy_stage_1"+png] ]);
ADD([T,"destroy_2"],[ [-1,a+"destroy_2"+png],[0,ma+"destroy_stage_2"+png] ]);
ADD([T,"destroy_3"],[ [-1,a+"destroy_3"+png],[0,ma+"destroy_stage_3"+png] ]);
ADD([T,"destroy_4"],[ [-1,a+"destroy_4"+png],[0,ma+"destroy_stage_4"+png] ]);
ADD([T,"destroy_5"],[ [-1,a+"destroy_5"+png],[0,ma+"destroy_stage_5"+png] ]);
ADD([T,"destroy_6"],[ [-1,a+"destroy_6"+png],[0,ma+"destroy_stage_6"+png] ]);
ADD([T,"destroy_7"],[ [-1,a+"destroy_7"+png],[0,ma+"destroy_stage_7"+png] ]);
ADD([T,"destroy_8"],[ [-1,a+"destroy_8"+png],[0,ma+"destroy_stage_8"+png] ]);
ADD([T,"destroy_9"],[ [-1,a+"destroy_9"+png],[0,ma+"destroy_stage_9"+png] ]);
ADD([T,"fire"     ],[ [-1,a+"fire_0"+png   ],[0,ma+"fire_layer_0"+png] ]);
ADD([T,"fire_2"   ],[ [-1,a+"fire_1"+png   ],[0,ma+"fire_layer_1"+png] ]);
ADD([T,"portal"   ],[ [-1,a+"portal"+png   ],[0,ma+"portal"+png] ]);

/* Жидкости */
ADD([T,"water_old"     ],[ [-1,a+"water"+png     ],[0,ma+"water_still"+png] ]);
ADD([T,"water_flow_old"],[ [-1,a+"water_flow"+png],[0,ma+"water_flow"+png] ]);
ADD([T,"lava"          ],[ [-1,a+"lava"+png      ],[0,ma+"lava_still"+png] ]);
ADD([T,"lava_flow"     ],[ [-1,a+"lava_flow"+png ],[0,ma+"lava_flow"+png] ]);

/* Остальное */
ADD([T,"cake_bottom"],[ [-1,a+"cake_bottom"+png ],[0,ma+"cake_bottom"+png] ]);
ADD([T,"cake_inner" ],[ [-1,a+"cake_inner"+png  ],[0,ma+"cake_inner"+png] ]);
ADD([T,"cake_side"  ],[ [-1,a+"cake_side"+png   ],[0,ma+"cake_side"+png] ]);
ADD([T,"cake"       ],[ [-1,a+"cake_top"+png    ],[0,ma+"cake_top"+png] ]);
ADD([T,"command"    ],[ [-1,a+"commandBlock"+png],[0,ma+"command_block"+png] ]);
ADD([T,"dragonegg"  ],[ [-1,a+"dragonEgg"+png   ],[0,ma+"dragon_egg"+png] ]);
ADD([T,"spawner"    ],[ [-1,a+"mobSpawner"+png  ],[0,ma+"mob_spawner"+png] ]);
ADD([T,"sponge"     ],[ [-1,a+"sponge"+png      ],[0,ma+"sponge"+png] ]);
ADD([T,"tnt_top"    ],[ [-1,a+"tnt_top"+png     ],[0,ma+"tnt_top"+png] ]);
ADD([T,"tnt"        ],[ [-1,a+"tnt_side"+png    ],[0,ma+"tnt_side"+png] ]);
ADD([T,"tnt_bottom" ],[ [-1,a+"tnt_bottom"+png  ],[0,ma+"tnt_bottom"+png] ]);
ADD([T,"cobweb"     ],[ [-1,a+"web"+png         ],[0,ma+"web"+png] ]);
ADD([T,"hay_side"   ],[ [ 0,ma+"hay_block_side"+png] ]);
ADD([T,"hay"        ],[ [ 0,ma+"hay_block_top"+png] ]);
ADD([T,"coal"       ],[ [ 0,ma+"coal_block"+png] ]);

/* Предметы Minecraft */ /* ======================================== */
T = "item";
a = i;
ma = mti;

/* Еда */
ADD([T,"apple"              ],[ [-1,a+"apple"+png          ],[0,ma+"apple"+png] ]);
ADD([T,"apple_gold"         ],[ [-1,a+"appleGold"+png      ],[0,ma+"apple_golden"+png] ]);
ADD([T,"meat_cow"           ],[ [-1,a+"beefRaw"+png        ],[0,ma+"beef_raw"+png] ]);
ADD([T,"meat_cow_cooked"    ],[ [-1,a+"beefCooked"+png     ],[0,ma+"beef_cooked"+png] ]);
ADD([T,"meat_pig"           ],[ [-1,a+"porkchopRaw"+png    ],[0,ma+"porkchop_raw"+png] ]);
ADD([T,"meat_pig_cooked"    ],[ [-1,a+"porkchopCooked"+png ],[0,ma+"porkchop_cooked"+png] ]);
ADD([T,"meat_chicken"       ],[ [-1,a+"chickenRaw"+png     ],[0,ma+"chicken_raw"+png] ]);
ADD([T,"meat_chicken_cooked"],[ [-1,a+"chickenCooked"+png  ],[0,ma+"chicken_cooked"+png] ]);
ADD([T,"meat_rotten"        ],[ [-1,a+"rottenFlesh"+png    ],[0,ma+"rotten_flesh"+png] ]);
ADD([T,"fish"               ],[ [-1,a+"fishRaw"+png        ],[0,ma+"fish_raw"+png] ]);
ADD([T,"fish_cooked"        ],[ [-1,a+"fishCooked"+png     ],[0,ma+"fish_cooked"+png] ]);
ADD([T,"bread"              ],[ [-1,a+"bread"+png          ],[0,ma+"bread"+png] ]);
ADD([T,"cake"               ],[ [-1,a+"cake"+png           ],[0,ma+"cake"+png] ]);
ADD([T,"pie"                ],[ [-1,a+"pumpkinPie"+png     ],[0,ma+"pumpkin_pie"+png] ]);
ADD([T,"potato"             ],[ [-1,a+"potato"+png         ],[0,ma+"potato"+png] ]);
ADD([T,"potato_cooked"      ],[ [-1,a+"potatoBaked"+png    ],[0,ma+"potato_baked"+png] ]);
ADD([T,"potato_rotten"      ],[ [-1,a+"potatoPoisonous"+png],[0,ma+"potato_poisonous"+png] ]);
ADD([T,"carrot"             ],[ [-1,a+"carrots"+png        ],[0,ma+"carrot"+png] ]);
ADD([T,"carrot_gold"        ],[ [-1,a+"carrotGolden"+png   ],[0,ma+"carrot_golden"+png] ]);
ADD([T,"cookie"             ],[ [-1,a+"cookie"+png         ],[0,ma+"cookie"+png] ]);
ADD([T,"watermelon"         ],[ [-1,a+"melon"+png          ],[0,ma+"melon"+png] ]);
ADD([T,"stew"               ],[ [-1,a+"mushroomStew"+png   ],[0,ma+"mushroom_stew"+png] ]);
ADD([T,"potion"             ],[ [-1,a+"potion"+png         ],[0,ma+"potion_bottle_drinkable"+png] ]);
ADD([T,"potion_overlay"     ],[ [-1,a+"potion_contents"+png],[0,ma+"potion_overlay"+png] ]);
ADD([T,"potion_splash"      ],[ [-1,a+"potion_splash"+png  ],[0,ma+"potion_bottle_splash"+png] ]);
ADD([T,"spidereye"          ],[ [-1,a+"spiderEye"+png      ],[0,ma+"spider_eye"+png] ]);

/* Оружие */
ADD([T,"diamond_sword"],[ [-1,a+"swordDiamond"+png],[0,ma+"swordDiamond"+png] ]);
ADD([T,"gold_sword"   ],[ [-1,a+"swordGold"+png   ],[0,ma+"swordGold"+png] ]);
ADD([T,"iron_sword"   ],[ [-1,a+"swordIron"+png   ],[0,ma+"swordIron"+png] ]);
ADD([T,"stone_sword"  ],[ [-1,a+"swordStone"+png  ],[0,ma+"swordStone"+png] ]);
ADD([T,"wood_sword"   ],[ [-1,a+"swordWood"+png   ],[0,ma+"swordWood"+png] ]);
ADD([T,"bow"          ],[ [-1,a+"bow"+png         ],[0,ma+"bow_standby"+png] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_0"+png  ],[0,ma+"bow_pulling_0"+png] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_1"+png  ],[0,ma+"bow_pulling_1"+png] ]);
ADD([T,""             ],[ [-1,a+"bow_pull_2"+png  ],[0,ma+"bow_pulling_2"+png] ]);
ADD([T,"arrow"        ],[ [-1,a+"arrow"+png       ],[0,ma+"arrow"+png] ]);

/* Инструменты */
ADD([T,"diamond_pickaxe"],[ [-1,a+"pickaxeDiamond"+png  ],[0,ma+"diamond_pickaxe"+png] ]);
ADD([T,"gold_pickaxe"   ],[ [-1,a+"pickaxeGold"+png     ],[0,ma+"gold_pickaxe"+png] ]);
ADD([T,"iron_pickaxe"   ],[ [-1,a+"pickaxeIron"+png     ],[0,ma+"iron_pickaxe"+png] ]);
ADD([T,"stone_pickaxe"  ],[ [-1,a+"pickaxeStone"+png    ],[0,ma+"stone_pickaxe"+png] ]);
ADD([T,"wood_pickaxe"   ],[ [-1,a+"pickaxeWood"+png     ],[0,ma+"wood_pickaxe"+png] ]);
ADD([T,"diamond_axe"    ],[ [-1,a+"hatchetDiamond"+png  ],[0,ma+"diamond_axe"+png] ]);
ADD([T,"gold_axe"       ],[ [-1,a+"hatchetGold"+png     ],[0,ma+"gold_axe"+png] ]);
ADD([T,"iron_axe"       ],[ [-1,a+"hatchetIron"+png     ],[0,ma+"iron_axe"+png] ]);
ADD([T,"stone_axe"      ],[ [-1,a+"hatchetStone"+png    ],[0,ma+"stone_axe"+png] ]);
ADD([T,"wood_axe"       ],[ [-1,a+"hatchetWood"+png     ],[0,ma+"wood_axe"+png] ]);
ADD([T,"diamond_shovel" ],[ [-1,a+"shovelDiamond"+png   ],[0,ma+"diamond_shovel"+png] ]);
ADD([T,"gold_shovel"    ],[ [-1,a+"shovelGold"+png      ],[0,ma+"gold_shovel"+png] ]);
ADD([T,"iron_shovel"    ],[ [-1,a+"shovelIron"+png      ],[0,ma+"iron_shovel"+png] ]);
ADD([T,"stone_shovel"   ],[ [-1,a+"shovelStone"+png     ],[0,ma+"stone_shovel"+png] ]);
ADD([T,"wood_shovel"    ],[ [-1,a+"shovelWood"+png      ],[0,ma+"wood_shovel"+png] ]);
ADD([T,"diamond_hoe"    ],[ [-1,a+"hoeDiamond"+png      ],[0,ma+"diamond_hoe"+png] ]);
ADD([T,"gold_hoe"       ],[ [-1,a+"hoeGold"+png         ],[0,ma+"gold_hoe"+png] ]);
ADD([T,"iron_hoe"       ],[ [-1,a+"hoeIron"+png         ],[0,ma+"iron_hoe"+png] ]);
ADD([T,"stone_hoe"      ],[ [-1,a+"hoeStone"+png        ],[0,ma+"stone_hoe"+png] ]);
ADD([T,"wood_hoe"       ],[ [-1,a+"hoeWood"+png         ],[0,ma+"wood_hoe"+png] ]);
ADD([T,"lighter"        ],[ [-1,a+"flintAndSteel"+png   ],[0,ma+"flint_and_steel"+png] ]);
ADD([T,"shears"         ],[ [-1,a+"shears"+png          ],[0,ma+"shears"+png] ]);
ADD([T,"bucket"         ],[ [-1,a+"bucket"+png          ],[0,ma+"bucket_empty"+png] ]);
ADD([T,"bucket_water"   ],[ [-1,a+"bucketWater"+png     ],[0,ma+"bucket_water"+png] ]);
ADD([T,"bucket_lava"    ],[ [-1,a+"bucketLava"+png      ],[0,ma+"bucket_lava"+png] ]);
ADD([T,"bucket_milk"    ],[ [-1,a+"milk"+png            ],[0,ma+"bucket_milk"+png] ]);
ADD([T,"fishrod"        ],[ [-1,a+"fishingRod"+png      ],[0,ma+"fishing_rod_cast"+png] ]);
ADD([T,"fishrod_empty"  ],[ [-1,a+"fishingRod_empty"+png],[0,ma+"fishing_rod_uncast"+png] ]);
ADD([T,"fishrod_carrot" ],[ [-1,a+"carrotOnAStick"+png  ],[0,ma+"carrot_on_a_stick"+png] ]);
ADD([T,"clock"          ],[ [-1,a+"clock"+png           ],[0,ma+"clock"+png] ]);
ADD([T,"compass"        ],[ [-1,a+"compass"+png         ],[0,ma+"compass"+png] ]);
ADD([T,"map"            ],[ [-1,a+"emptyMap"+png        ],[0,ma+"map_empty"+png] ]);
ADD([T,"map_filled"     ],[ [-1,a+"map"+png             ],[0,ma+"map_filled"+png] ]);
ADD([T,"lead"           ],[ [ 0,ma+"lead"+png] ]);
ADD([T,"nametag"        ],[ [ 0,ma+"name_tag"+png] ]);

/* Броня */
ADD([T,"chain_helmet"          ],[ [-1,a+"helmetChain"+png            ],[0,ma+"chainmail_helmet"+png] ]);
ADD([T,"leather_helmet"        ],[ [-1,a+"helmetCloth"+png            ],[0,ma+"leather_helmet"+png] ]);
ADD([T,"leather_helmet_overlay"],[ [-1,a+"helmetCloth_overlay"+png    ],[0,ma+"leather_helmet_overlay"+png] ]);
ADD([T,"diamond_helmet"        ],[ [-1,a+"helmetDiamond"+png          ],[0,ma+"diamond_helmet"+png] ]);
ADD([T,"gold_helmet"           ],[ [-1,a+"helmetGold"+png             ],[0,ma+"gold_helmet"+png] ]);
ADD([T,"iron_helmet"           ],[ [-1,a+"helmetIron"+png             ],[0,ma+"iron_helmet"+png] ]);
ADD([T,"chain_chest"           ],[ [-1,a+"chestplateChain"+png        ],[0,ma+"chainmail_chestplate"+png] ]);
ADD([T,"leather_chest"         ],[ [-1,a+"chestplateCloth"+png        ],[0,ma+"leather_chestplate"+png] ]);
ADD([T,"leather_chest_overlay" ],[ [-1,a+"chestplateCloth_overlay"+png],[0,ma+"leather_chestplate_overlay"+png] ]);
ADD([T,"diamond_chest"         ],[ [-1,a+"chestplateDiamond"+png      ],[0,ma+"diamond_chestplate"+png] ]);
ADD([T,"gold_chest"            ],[ [-1,a+"chestplateGold"+png         ],[0,ma+"gold_chestplate"+png] ]);
ADD([T,"iron_chest"            ],[ [-1,a+"chestplateIron"+png         ],[0,ma+"iron_chestplate"+png] ]);
ADD([T,"chain_pants"           ],[ [-1,a+"leggingsChain"+png          ],[0,ma+"chainmail_leggings"+png] ]);
ADD([T,"leather_pants"         ],[ [-1,a+"leggingsCloth"+png          ],[0,ma+"leather_leggings"+png] ]);
ADD([T,"leather_pants_overlay" ],[ [-1,a+"leggingsCloth_overlay"+png  ],[0,ma+"leather_leggings_overlay"+png] ]);
ADD([T,"diamond_pants"         ],[ [-1,a+"leggingsDiamond"+png        ],[0,ma+"diamond_leggings"+png] ]);
ADD([T,"gold_pants"            ],[ [-1,a+"leggingsGold"+png           ],[0,ma+"gold_leggings"+png] ]);
ADD([T,"iron_pants"            ],[ [-1,a+"leggingsIron"+png           ],[0,ma+"iron_leggings"+png] ]);
ADD([T,"chain_boots"           ],[ [-1,a+"bootsChain"+png             ],[0,ma+"chainmail_boots"+png] ]);
ADD([T,"leather_boots"         ],[ [-1,a+"bootsCloth"+png             ],[0,ma+"leather_boots"+png] ]);
ADD([T,"leather_boots_overlay" ],[ [-1,a+"bootsCloth_overlay"+png     ],[0,ma+"leather_boots_overlay"+png] ]);
ADD([T,"diamond_boots"         ],[ [-1,a+"bootsDiamond"+png           ],[0,ma+"diamond_boots"+png] ]);
ADD([T,"gold_boots"            ],[ [-1,a+"bootsGold"+png              ],[0,ma+"gold_boots"+png] ]);
ADD([T,"iron_boots"            ],[ [-1,a+"bootsIron"+png              ],[0,ma+"iron_boots"+png] ]);

/* Блоки предметы */
ADD([T,"bed"         ],[ [-1,a+"bed"+png           ],[0,ma+"bed"+png] ]);
ADD([T,"brewingstand"],[ [-1,a+"brewingStand"+png  ],[0,ma+"brewing_stand"+png] ]);
ADD([T,"cauldron"    ],[ [-1,a+"cauldron"+png      ],[0,ma+"cauldron"+png] ]);
ADD([T,"hopper"      ],[ [-1,a+"hopper"+png        ],[0,ma+"hopper"+png] ]);
ADD([T,"comparator"  ],[ [-1,a+"comparator"+png    ],[0,ma+"comparator"+png] ]);
ADD([T,"repeater"    ],[ [-1,a+"diode"+png         ],[0,ma+"repeater"+png] ]);
ADD([T,"iron_door"   ],[ [-1,a+"doorIron"+png      ],[0,ma+"door_iron"+png] ]);
ADD([T,"oak_door"    ],[ [-1,a+"doorWood"+png      ],[0,ma+"door_wood"+png] ]);
ADD([T,"pot"         ],[ [-1,a+"flowerPot"+png     ],[0,ma+"flower_pot"+png] ]);
ADD([T,"itemframe"   ],[ [-1,a+"frame"+png         ],[0,ma+"item_frame"+png] ]);
ADD([T,"painting"    ],[ [-1,a+"painting"+png      ],[0,ma+"painting"+png] ]);
ADD([T,"oak_sign"    ],[ [-1,a+"sign"+png          ],[0,ma+"sign"+png] ]);
ADD([T,"head"        ],[ [-1,a+"skull_char"+png    ],[0,ma+"skull_steve"+png] ]);
ADD([T,"head_creeper"],[ [-1,a+"skull_creeper"+png ],[0,ma+"skull_creeper"+png] ]);
ADD([T,"skull"       ],[ [-1,a+"skull_skeleton"+png],[0,ma+"skull_skeleton"+png] ]);
ADD([T,"skull_wither"],[ [-1,a+"skull_wither"+png  ],[0,ma+"skull_wither"+png] ]);
ADD([T,"head_zombie" ],[ [-1,a+"skull_zombie"+png  ],[0,ma+"skull_zombie"+png] ]);

/* Сущности предметы */
ADD([T,"boat"            ],[ [-1,a+"boat"+png           ],[0,ma+"boat"+png] ]);
ADD([T,"minecart"        ],[ [-1,a+"minecart"+png       ],[0,ma+"minecart_normal"+png] ]);
ADD([T,"minecart_chest"  ],[ [-1,a+"minecartChest"+png  ],[0,ma+"minecart_chest"+png] ]);
ADD([T,"minecart_furnace"],[ [-1,a+"minecartFurnace"+png],[0,ma+"minecart_furnace"+png] ]);
ADD([T,"minecart_hopper" ],[ [-1,a+"minecartHopper"+png ],[0,ma+"minecart_hopper"+png] ]);
ADD([T,"minecart_tnt"    ],[ [-1,a+"minecartTnt"+png    ],[0,ma+"minecart_tnt"+png] ]);

/* Ресурсы */
ADD([T,"stick"              ],[ [-1,a+"stick"+png              ],[0,ma+"stick"+png] ]);
ADD([T,"string"             ],[ [-1,a+"string"+png             ],[0,ma+"string"+png] ]);
ADD([T,"sugar"              ],[ [-1,a+"sugar"+png              ],[0,ma+"sugar"+png] ]);
ADD([T,"gunpowder"          ],[ [-1,a+"sulphur"+png            ],[0,ma+"gunpowder"+png] ]);
ADD([T,"gold"               ],[ [-1,a+"ingotGold"+png          ],[0,ma+"gold_ingot"+png] ]);
ADD([T,"gold_nugget"        ],[ [-1,a+"goldNugget"+png         ],[0,ma+"gold_nugget"+png] ]);
ADD([T,"iron"               ],[ [-1,a+"ingotIron"+png          ],[0,ma+"iron_ingot"+png] ]);
ADD([T,"blaze"              ],[ [-1,a+"blazeRod"+png           ],[0,ma+"blaze_rod"+png] ]);
ADD([T,"blaze_powder"       ],[ [-1,a+"blazePowder"+png        ],[0,ma+"blaze_powder"+png] ]);
ADD([T,"bone"               ],[ [-1,a+"bone"+png               ],[0,ma+"bone"+png] ]);
ADD([T,"book"               ],[ [-1,a+"book"+png               ],[0,ma+"book_normal"+png] ]);
ADD([T,"bowl"               ],[ [-1,a+"bowl"+png               ],[0,ma+"bowl"+png] ]);
ADD([T,"clay"               ],[ [-1,a+"clay"+png               ],[0,ma+"clay_ball"+png] ]);
ADD([T,"brick"              ],[ [-1,a+"brick"+png              ],[0,ma+"brick"+png] ]);
ADD([T,"coal"               ],[ [-1,a+"coal"+png               ],[0,ma+"coal"+png] ]);
ADD([T,"coal_wood"          ],[ [ 0,ma+"charcoal"+png          ] ]);
ADD([T,"diamond"            ],[ [-1,a+"diamond"+png            ],[0,ma+"diamond"+png] ]);
ADD([T,"ink"                ],[ [-1,a+"dyePowder_black"+png    ],[0,ma+"dye_powder_black"+png] ]);
ADD([T,"lapis"              ],[ [-1,a+"dyePowder_blue"+png     ],[0,ma+"dye_powder_blue"+png] ]);
ADD([T,"cocoa"              ],[ [-1,a+"dyePowder_brown"+png    ],[0,ma+"dye_powder_brown"+png] ]);
ADD([T,"cyan"               ],[ [-1,a+"dyePowder_cyan"+png     ],[0,ma+"dye_powder_cyan"+png] ]);
ADD([T,"gray"               ],[ [-1,a+"dyePowder_gray"+png     ],[0,ma+"dye_powder_gray"+png] ]);
ADD([T,"green"              ],[ [-1,a+"dyePowder_green"+png    ],[0,ma+"dye_powder_green"+png] ]);
ADD([T,"aqua"               ],[ [-1,a+"dyePowder_lightBlue"+png],[0,ma+"dye_powder_lightBlue"+png] ]);
ADD([T,"lime"               ],[ [-1,a+"dyePowder_lime"+png     ],[0,ma+"dye_powder_lime"+png] ]);
ADD([T,"magenta"            ],[ [-1,a+"dyePowder_magenta"+png  ],[0,ma+"dye_powder_magenta"+png] ]);
ADD([T,"orange"             ],[ [-1,a+"dyePowder_orange"+png   ],[0,ma+"dye_powder_orange"+png] ]);
ADD([T,"pink"               ],[ [-1,a+"dyePowder_pink"+png     ],[0,ma+"dye_powder_pink"+png] ]);
ADD([T,"purple"             ],[ [-1,a+"dyePowder_purple"+png   ],[0,ma+"dye_powder_purple"+png] ]);
ADD([T,"red"                ],[ [-1,a+"dyePowder_red"+png      ],[0,ma+"dye_powder_red"+png] ]);
ADD([T,"silver"             ],[ [-1,a+"dyePowder_silver"+png   ],[0,ma+"dye_powder_silver"+png] ]);
ADD([T,"bonedust"           ],[ [-1,a+"dyePowder_white"+png    ],[0,ma+"dye_powder_white"+png] ]);
ADD([T,"yellow"             ],[ [-1,a+"dyePowder_yellow"+png   ],[0,ma+"dye_powder_yellow"+png] ]);
ADD([T,"egg"                ],[ [-1,a+"egg"+png                ],[0,ma+"egg"+png] ]);
ADD([T,"emerald"            ],[ [-1,a+"emerald"+png            ],[0,ma+"emerald"+png] ]);
ADD([T,"endereye"           ],[ [-1,a+"enderPearl"+png         ],[0,ma+"ender_pearl"+png] ]);
ADD([T,"endeye"             ],[ [-1,a+"eyeOfEnder"+png         ],[0,ma+"ender_eye"+png] ]);
ADD([T,"feather"            ],[ [-1,a+"feather"+png            ],[0,ma+"feather"+png] ]);
ADD([T,"spidereye_fermented"],[ [-1,a+"fermentedSpiderEye"+png ],[0,ma+"spider_eye_fermented"+png] ]);
ADD([T,"fire"               ],[ [-1,a+"fireball"+png           ],[0,ma+"fireball"+png] ]);
ADD([T,"flint"              ],[ [-1,a+"flint"+png              ],[0,ma+"flint"+png] ]);
ADD([T,"tear"               ],[ [-1,a+"ghastTear"+png          ],[0,ma+"ghast_tear"+png] ]);
ADD([T,"bottle"             ],[ [-1,a+"glassBottle"+png        ],[0,ma+"potion_bottle_empty"+png] ]);
ADD([T,"leather"            ],[ [-1,a+"leather"+png            ],[0,ma+"leather"+png] ]);
ADD([T,"magma"              ],[ [-1,a+"magmaCream"+png         ],[0,ma+"magma_cream"+png] ]);
ADD([T,"netherbrick"        ],[ [-1,a+"netherbrick"+png        ],[0,ma+"netherbrick"+png] ]);
ADD([T,"quartz"             ],[ [-1,a+"netherquartz"+png       ],[0,ma+"quartz"+png] ]);
ADD([T,"wart"               ],[ [-1,a+"netherStalkSeeds"+png   ],[0,ma+"nether_wart"+png] ]);
ADD([T,"netherstar"         ],[ [-1,a+"netherStar"+png         ],[0,ma+"nether_star"+png] ]);
ADD([T,"paper"              ],[ [-1,a+"paper"+png              ],[0,ma+"paper"+png] ]);
ADD([T,"redstone"           ],[ [-1,a+"redstone"+png           ],[0,ma+"redstone_dust"+png] ]);
ADD([T,"sugarcane"          ],[ [-1,a+"reeds"+png              ],[0,ma+"reeds"+png] ]);
ADD([T,"ruby"               ],[ [-1,a+"ruby"+png               ],[0,ma+"ruby"+png] ]);
ADD([T,"seeds"              ],[ [-1,a+"seeds"+png              ],[0,ma+"seeds_wheat"+png] ]);
ADD([T,"seeds_watermelon"   ],[ [-1,a+"seeds_melon"+png        ],[0,ma+"seeds_melon"+png] ]);
ADD([T,"seeds_pumpkin"      ],[ [-1,a+"seeds_pumpkin"+png      ],[0,ma+"seeds_pumpkin"+png] ]);
ADD([T,"slime"              ],[ [-1,a+"slimeball"+png          ],[0,ma+"slimeball"+png] ]);
ADD([T,"snow"               ],[ [-1,a+"snowball"+png           ],[0,ma+"snowball"+png] ]);
ADD([T,"watermelon_gold"    ],[ [-1,a+"speckledMelon"+png      ],[0,ma+"melon_speckled"+png] ]);
ADD([T,"wheat"              ],[ [-1,a+"wheat"+png              ],[0,ma+"wheat"+png] ]);
ADD([T,"glowstone"          ],[ [-1,a+"yellowDust"+png         ],[0,ma+"glowstone_dust"+png] ]);

/* Остальное */
ADD([T,"book_enchantment"     ],[ [-1,a+"enchantedBook"+png          ],[0,ma+"book_enchanted"+png] ]);
ADD([T,"book_writable"        ],[ [-1,a+"writingBook"+png            ],[0,ma+"book_writable"+png] ]);
ADD([T,"book_written"         ],[ [-1,a+"writtenBook"+png            ],[0,ma+"book_written"+png] ]);
ADD([T,"bottle_xp"            ],[ [-1,a+"expBottle"+png              ],[0,ma+"experience_bottle"+png] ]);
ADD([T,"firework"             ],[ [-1,a+"fireworks"+png              ],[0,ma+"fireworks"+png] ]);
ADD([T,"firework_base"        ],[ [-1,a+"fireworksCharge"+png        ],[0,ma+"fireworks_charge"+png] ]);
ADD([T,"firework_base_overlay"],[ [-1,a+"fireworksCharge_overlay"+png],[0,ma+"fireworks_charge_overlay"+png] ]);
ADD([T,"spawn"                ],[ [-1,a+"monsterPlacer"+png          ],[0,ma+"spawn_egg"+png] ]);
ADD([T,"spawn_overlay"        ],[ [-1,a+"monsterPlacer_overlay"+png  ],[0,ma+"spawn_egg_overlay"+png] ]);
ADD([T,"record_11"            ],[ [-1,a+"record_11"+png              ],[0,ma+"record_11"+png] ]);
ADD([T,"record_13"            ],[ [-1,a+"record_13"+png              ],[0,ma+"record_13"+png] ]);
ADD([T,"record_blocks"        ],[ [-1,a+"record_blocks"+png          ],[0,ma+"record_blocks"+png] ]);
ADD([T,"record_cat"           ],[ [-1,a+"record_cat"+png             ],[0,ma+"record_cat"+png] ]);
ADD([T,"record_chirp"         ],[ [-1,a+"record_chirp"+png           ],[0,ma+"record_chirp"+png] ]);
ADD([T,"record_far"           ],[ [-1,a+"record_far"+png             ],[0,ma+"record_far"+png] ]);
ADD([T,"record_mall"          ],[ [-1,a+"record_mall"+png            ],[0,ma+"record_mall"+png] ]);
ADD([T,"record_mellohi"       ],[ [-1,a+"record_mellohi"+png         ],[0,ma+"record_mellohi"+png] ]);
ADD([T,"record_stal"          ],[ [-1,a+"record_stal"+png            ],[0,ma+"record_stal"+png] ]);
ADD([T,"record_strad"         ],[ [-1,a+"record_strad"+png           ],[0,ma+"record_strad"+png] ]);
ADD([T,"record_wait"          ],[ [-1,a+"record_wait"+png            ],[0,ma+"record_wait"+png] ]);
ADD([T,"record_ward"          ],[ [-1,a+"record_ward"+png            ],[0,ma+"record_ward"+png] ]);
ADD([T,"saddle"               ],[ [-1,a+"saddle"+png                 ],[0,ma+"saddle"+png] ]);
ADD([T,"slot_boots"           ],[ [-1,a+"slot_empty_boots"+png       ],[0,ma+"empty_armor_slot_boots"+png] ]);
ADD([T,"slot_chest"           ],[ [-1,a+"slot_empty_chestplate"+png  ],[0,ma+"empty_armor_slot_chestplate"+png] ]);
ADD([T,"slot_helmet"          ],[ [-1,a+"slot_empty_helmet"+png      ],[0,ma+"empty_armor_slot_helmet"+png] ]);
ADD([T,"slot_pants"           ],[ [-1,a+"slot_empty_leggings"+png    ],[0,ma+"empty_armor_slot_leggings"+png] ]);
ADD([T,"horsearmor_iron"      ],[ [ 0,ma+"iron_horse_armor"+png] ]);
ADD([T,"horsearmor_gold"      ],[ [ 0,ma+"gold_horse_armor"+png] ]);
ADD([T,"horsearmor_diamond"   ],[ [ 0,ma+"diamond_horse_armor"+png] ]);

/* Environment Minecraft */ /* ======================================== */
T = "environment";
ma = mte;

/* Колормапы */
ADD([T,"colormap_grass"  ],[ [ 0,mt+"colormap/grass"+png] ]);
ADD([T,"colormap_foliage"],[ [ 0,mt+"colormap/foliage"+png] ]);

/* Остальное */
ADD([T ,"rain"       ],[ [ 0,ma+"rain"+png] ]);
ADD([T ,"snow"       ],[ [ 0,ma+"snow"+png] ]);
ADD([T ,"moon_phases"],[ [ 0,ma+"moon_phases"+png] ]);
ADD([T ,"sun"        ],[ [ 0,ma+"sun"+png] ]);
ADD([T ,"clouds"     ],[ [ 0,ma+"clouds"+png] ]);
ADD([To,"sky_end"    ],[ [ 0,ma+"end_sky"+png] ]);

/* Шрифт Minecraft */ /* ======================================== */
T = "font";
ma = mtf;

ADD([T,"ascii"],[ [ 0,ma+"ascii"+png] ]);

/* Сущности Minecraft */ /* ======================================== */
T = "mob";
ma = mten;

/* Игрок */
ADD([T,"player_old"],[ [ 0,ma+"steve"+png] ]);

/* Нейтральные мобы */
ADD([T,"bat"                   ],[ [ 0,ma+"bat"+png] ]);
ADD([T,"chicken"               ],[ [ 0,ma+"chicken"+png] ]);
ADD([T,"golem_iron"            ],[ [ 0,ma+"iron_golem"+png] ]);
ADD([T,"golem_snow"            ],[ [ 0,ma+"snowman"+png] ]);
ADD([T,"squid"                 ],[ [ 0,ma+"squid"+png] ]);
ADD([T,"ocelot"                ],[ [ 0,ma+"cat/ocelot"+png] ]);
ADD([T,"cat"                   ],[ [ 0,ma+"cat/red"+png] ]);
ADD([T,"cat_black"             ],[ [ 0,ma+"cat/black"+png] ]);
ADD([T,"cat_siamese"           ],[ [ 0,ma+"cat/siamese"+png] ]);
ADD([T,"cow"                   ],[ [ 0,ma+"cow/cow"+png] ]);
ADD([T,"cow_red"               ],[ [ 0,ma+"cow/mooshroom"+png] ]);
ADD([T,"pig"                   ],[ [ 0,ma+"pig/pig"+png] ]);
ADD([T,"pig_saddle"            ],[ [ 0,ma+"pig/pig_saddle"+png] ]);
ADD([T,"sheep"                 ],[ [ 0,ma+"sheep/sheep"+png] ]);
ADD([T,"sheep_overlay"         ],[ [ 0,ma+"sheep/sheep_fur"+png] ]);
ADD([T,"villager_old"          ],[ [ 0,ma+"villager/villager"+png] ]);
ADD([T,"villager_old_butcher"  ],[ [ 0,ma+"villager/butcher"+png] ]);
ADD([T,"villager_old_farmer"   ],[ [ 0,ma+"villager/farmer"+png] ]);
ADD([T,"villager_old_librarian"],[ [ 0,ma+"villager/librarian"+png] ]);
ADD([T,"villager_old_priest"   ],[ [ 0,ma+"villager/priest"+png] ]);
ADD([T,"villager_old_smith"    ],[ [ 0,ma+"villager/smith"+png] ]);
ADD([T,"wolf"                  ],[ [ 0,ma+"wolf/wolf"+png] ]);
ADD([T,"wolf_angry"            ],[ [ 0,ma+"wolf/wolf_angry"+png] ]);
ADD([T,"wolf_pet"              ],[ [ 0,ma+"wolf/wolf_tame"+png] ]);
ADD([T,"wolf_pet_overlay"      ],[ [ 0,ma+"wolf/wolf_collar"+png] ]);

/* Враждебные мобы */
ADD([T,"creeper"              ],[ [ 0,ma+"creeper/creeper"+png] ]);
ADD([T,"creeper_power"        ],[ [ 0,ma+"creeper/creeper_armor"+png] ]);
ADD([T,"enderdragon"          ],[ [ 0,ma+"enderdragon/dragon"+png] ]);
ADD([T,"enderdragon_eyes"     ],[ [ 0,ma+"enderdragon/dragon_eyes"+png] ]);
ADD([T,"enderdragon_exploding"],[ [ 0,ma+"enderdragon/dragon_exploding"+png] ]);
ADD([T,"enderman"             ],[ [ 0,ma+"enderman/enderman"+png] ]);
ADD([T,"enderman_eyes"        ],[ [ 0,ma+"enderman/enderman_eyes"+png] ]);
ADD([T,"ghast"                ],[ [ 0,ma+"ghast/ghast"+png] ]);
ADD([T,"ghast_shooting"       ],[ [ 0,ma+"ghast/ghast_shooting"+png] ]);
ADD([T,"skeleton"             ],[ [ 0,ma+"skeleton/skeleton"+png] ]);
ADD([T,"skeleton_wither"      ],[ [ 0,ma+"skeleton/wither_skeleton"+png] ]);
ADD([T,"slime"                ],[ [ 0,ma+"slime/slime"+png] ]);
ADD([T,"magma"                ],[ [ 0,ma+"slime/magmacube"+png] ]);
ADD([T,"spider"               ],[ [ 0,ma+"spider/spider"+png] ]);
ADD([T,"spider_cave"          ],[ [ 0,ma+"spider/cave_spider"+png] ]);
ADD([T,"spider_eyes"          ],[ [ 0,ma+"spider_eyes"+png] ]);
ADD([T,"wither"               ],[ [ 0,ma+"wither/wither"+png] ]);
ADD([T,"wither_power"         ],[ [ 0,ma+"wither/wither_armor"+png] ]);
ADD([T,"wither_invulnerable"  ],[ [ 0,ma+"wither/wither_invulnerable"+png] ]);
ADD([T,"zombie"               ],[ [ 0,ma+"zombie/zombie"+png] ]);
ADD([T,"zombie_villager"      ],[ [ 0,ma+"zombie/zombie_villager"+png] ]);
ADD([T,"blaze"                ],[ [ 0,ma+"blaze"+png] ]);
ADD([T,"silverfish"           ],[ [ 0,ma+"creeper/silverfish"+png] ]);
ADD([T,"witch"                ],[ [ 0,ma+"creeper/witch"+png] ]);
ADD([T,"zombie_pig"           ],[ [ 0,ma+"creeper/zombie_pigman"+png] ]);

T = Te;

/* Энтити */
ADD([T,"arrow"            ],[ [ 0,ma+"arrow"+png] ]);
ADD([T,"boat"             ],[ [ 0,ma+"boat"+png] ]);
ADD([T,"minecart"         ],[ [ 0,ma+"minecart"+png] ]);
ADD([T,"oak_sign"         ],[ [ 0,ma+"sign"+png] ]);
ADD([T,"chest"            ],[ [ 0,ma+"chest/normal"+png] ]);
ADD([T,"chest_double"     ],[ [ 0,ma+"chest/normal_double"+png] ]);
ADD([T,"chest_trap"       ],[ [ 0,ma+"chest/trapped"+png] ]);
ADD([T,"chest_trap_double"],[ [ 0,ma+"chest/trapped_double"+png] ]);
ADD([T,"chest_ender"      ],[ [ 0,ma+"chest/ender"+png] ]);
ADD([T,"chest_xmas"       ],[ [ 0,ma+"chest/christmas"+png] ]);
ADD([T,"chest_xmas_double"],[ [ 0,ma+"chest/christmas_double"+png] ]);
ADD([T,"endercrystal"     ],[ [ 0,ma+"endercrystal/endercrystal"+png] ]);

T = Tp;

/* Эффектовые энтити */
ADD([T  ,"beam"             ],[ [ 0,ma+"beacon_beam"+png                   ] ]);
ADD([T  ,"beam_endercrystal"],[ [ 0,ma+"endercrystal/endercrystal_beam"+png] ]);
ADD([T  ,"book"             ],[ [ 0,ma+"enchanting_table_book"+png         ] ]);
ADD([Ten,"endportal"        ],[ [ 0,ma+"end_portal"+png                    ] ]);
ADD([T  ,"xp"               ],[ [ 0,ma+"experience_orb"+png                ] ]);
ADD([T  ,"explosion"        ],[ [ 0,ma+"explosion"+png                     ] ]);
ADD([T  ,"lead"             ],[ [ 0,ma+"lead"+png                          ] ]);

/* Интерфейс Minecraft */ /* ======================================== */
ma = mtg;
T = Tg;

/* Главное */
ADD([T,"background"         ],[ [ 0,ma+"options_background"+png         ] ]);
ADD([T,"widgets"            ],[ [ 0,ma+"widgets"+png                    ] ]);
ADD([T,"icons"              ],[ [ 0,ma+"icons"+png                      ] ]);
ADD([T,"loadingscreen"      ],[ [ 0,ma+"title/mojang"+png               ] ]);
ADD([T,"title_default"      ],[ [ 0,ma+"title/minecraft"+png            ] ]);

/* Интерфейс */
ADD([T,"book"            ],[ [ 0,ma+"book"+png                              ] ]);
ADD([T,"achievements_old"],[ [ 0,ma+"achievement/achievement_background"+png] ]);
ADD([T,"anvil"           ],[ [ 0,ma+"container/anvil"+png                   ] ]);
ADD([T,"beacon"          ],[ [ 0,ma+"container/beacon"+png                  ] ]);
ADD([T,"brewingstand"    ],[ [ 0,ma+"container/brewing_stand"+png           ] ]);
ADD([T,"craftingtable"   ],[ [ 0,ma+"container/crafting_table"+png          ] ]);
ADD([T,"dispenser"       ],[ [ 0,ma+"container/dispenser"+png               ] ]);
ADD([T,"enchantingtable" ],[ [ 0,ma+"container/enchanting_table"+png        ] ]);
ADD([T,"furnace"         ],[ [ 0,ma+"container/furnace"+png                 ] ]);
ADD([T,"chest"           ],[ [ 0,ma+"container/generic_54"+png              ] ]);
ADD([T,"hopper"          ],[ [ 0,ma+"container/hopper"+png                  ] ]);
ADD([T,"horse"           ],[ [ 0,ma+"container/horse"+png                   ] ]);
ADD([T,"inventory_old"   ],[ [ 0,ma+"container/inventory"+png               ] ]);
ADD([T,"stats"           ],[ [ 0,ma+"container/stats_icons"+png             ] ]);
ADD([T,"villager_old"    ],[ [ 0,ma+"container/villager"+png                ] ]);

/* Креатив */
ADD([T,"creative"          ],[ [ 0,ma+"container/creative_inventory/tab_items"+png       ] ]);
ADD([T,"creative_search"   ],[ [ 0,ma+"container/creative_inventory/tab_item_search"+png ] ]);
ADD([T,"creative_inventory"],[ [ 0,ma+"container/creative_inventory/tab_inventory"+png   ] ]);
ADD([T,"creative_tabs"     ],[ [ 0,ma+"container/creative_inventory/tabs"+png            ] ]);

/* Остальное */
ADD([To,"panorama_mainmenu_0"],[ [ 0,ma+"title/background/panorama_0"+png] ]);
ADD([To,"panorama_mainmenu_1"],[ [ 0,ma+"title/background/panorama_1"+png] ]);
ADD([To,"panorama_mainmenu_2"],[ [ 0,ma+"title/background/panorama_2"+png] ]);
ADD([To,"panorama_mainmenu_3"],[ [ 0,ma+"title/background/panorama_3"+png] ]);
ADD([To,"panorama_mainmenu_4"],[ [ 0,ma+"title/background/panorama_4"+png] ]);
ADD([To,"panorama_mainmenu_5"],[ [ 0,ma+"title/background/panorama_5"+png] ]);
ADD([T ,"demo"],[ [ 0,ma+"demo_background"+png] ]);

/* Картины Minecraft */ /* ======================================== */
ma = mtpaint;
T = Tpa;

/* Атлас картин */
ADD([T,"atlas"],[ [ 0,ma+"paintings_kristoffer_zetterstrand"+png] ]);

/* Партиклы Minecraft */ /* ======================================== */
ma = mtp;
T = Tp;

/* Атлас партиклов */
ADD([T,"atlas_old"],[ [ 0,ma+"particles"+png] ]);

/* Модели Minecraft */ /* ======================================== */
ma = mta;
T = Ta;

/* Броня */
ADD([Tg,"chain"                ],[ [ 0,ma+"chainmail_layer_1"+png      ] ]);
ADD([Tg,"chain_pants"          ],[ [ 0,ma+"chainmail_layer_2"+png      ] ]);
ADD([Tg,"diamond"              ],[ [ 0,ma+"diamond_layer_1"+png        ] ]);
ADD([Tg,"diamond_pants"        ],[ [ 0,ma+"diamond_layer_2"+png        ] ]);
ADD([Tg,"gold"                 ],[ [ 0,ma+"gold_layer_1"+png           ] ]);
ADD([Tg,"gold_pants"           ],[ [ 0,ma+"gold_layer_2"+png           ] ]);
ADD([Tg,"iron"                 ],[ [ 0,ma+"iron_layer_1"+png           ] ]);
ADD([Tg,"iron_pants"           ],[ [ 0,ma+"iron_layer_2"+png           ] ]);
ADD([Tg,"leather"              ],[ [ 0,ma+"leather_layer_1"+png        ] ]);
ADD([Tg,"leather_pants"        ],[ [ 0,ma+"leather_layer_2"+png        ] ]);
ADD([Tg,"leather_overlay"      ],[ [ 0,ma+"leather_layer_1_overlay"+png] ]);
ADD([Tg,"leather_pants_overlay"],[ [ 0,ma+"leather_layer_2_overlay"+png] ]);

/* Другое Minecraft */ /* ======================================== */
ma = mt;

/* Карта */
ADD([Tg,"map"          ],[ [ 0,ma+"map/map_background"+png] ]);
ADD([Tg,"map_icons_old"],[ [ 0,ma+"map/map_icons"+png     ] ]);

/* Папка Misc */
ma = mtm;
ADD([Tg,"overlay_pumpkin"],[ [ 0,ma+"pumpkinblur"+png         ] ]);
ADD([Tg,"unknown"        ],[ [ 0,ma+"unknown_pack"+png        ] ]);
ADD([To,"enchant"        ],[ [ 0,ma+"enchanted_item_glint"+png] ]);
ADD([To,"vignette"       ],[ [ 0,ma+"vignette"+png            ] ]);
ADD([Tp,"shadow"         ],[ [ 0,ma+"shadow"+png              ] ]);
ADD([Tb,"water_old"      ],[ [ 0,ma+"underwater"+png          ] ]);