import dungeon_data from './Dungeon/ProjectEon_Dungeon_DataAsset.png'
import dungeon_blueprint from './Dungeon/ProjectEon_Dungeon_Blueprint.png'
import dungeon_header from './Dungeon/ProjectEon_Dungeon_Header.png'
import dungeon_cpp from './Dungeon/ProjectEon_Dungeon_CPP.png'
import dungeon_generation from './Dungeon/ProjectEon_Dungeon_Generation.png'
import inventory_design from './Inventory/ProjectEon_Inventory_Design.png'
import inventory_itemdefinition from './Inventory/ProjectEon_Inventory_ItemDefinition.png'
import inventory_items from './Inventory/ProjectEon_Inventory_Items.png'
import inventory_itemactor_header from './Inventory/ProjectEon_Inventory_ItemActor_Header.png'
import inventory_itemactor_cpp from './Inventory/ProjectEon_Inventory_ItemActor_CPP.png'

export const dungeon_images = [
    {
        original: dungeon_data,
        orignalHeight: "640px",
        description: "Data Asset containing any Level info that is used for generating and linking the Rooms together",
        type: "image"
    },
    {
        original: dungeon_blueprint,
        orignalHeight: "640px",
        description: "Blueprint showcasing how a Dungeon can be generated with Room requirements",
        type: "image"
    },
    {
        original: dungeon_header,
        orignalHeight: "640px",
        description: "C++ Header file detailing the API used to interact with the Dungeon System",
        type: "image"
    },
    {
        original: dungeon_cpp,
        orignalHeight: "640px",
        description: "Main algorithm used for generating a Dungeon",
        type: "image"
    },
    {
        original: dungeon_generation,
        orignalHeight: "640px",
        description: "Visualized Output of the Generated Dungeon. Used to traverse by clicking on any Colored Square",
        type: "image"
    },
]

export const inventory_images = [
    {
        original: inventory_design,
        originalHeight: "640px",
        description: "Design of the Item Inventory system",
        type: "image"
    },
    {
        original: inventory_itemdefinition,
        originalHeight: "640px",
        description: "Item Definition Data Asset immutable and can only be changed in the Editor",
        type: "image"
    },
    {
        original: inventory_items,
        originalHeight: "640px",
        description: "Items are managed by Unreal's Asset Manager where each Data Asset is a unique Item",
        type: "image"
    },
    {
        original: inventory_itemactor_header,
        originalHeight: "640px",
        description: "In world visual representation of the Item",
        type: "image"
    },
    {
        original: inventory_itemactor_cpp,
        originalHeight: "640px",
        description: "Unreal Asset Manager to load specific parts of the Item depending on the scenario",
        type: "image"
    },
]

const ProjectEon_Images = [

]

export default ProjectEon_Images;