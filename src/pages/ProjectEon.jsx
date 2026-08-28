import React from 'react'
import './ProjectEon.css'
import PageLayout from '../layout/PageLayout'
import ProjectHeader from '../components/Project/ProjectHeader'
import ResponsiveDrivePlayer from '../components/Responsive/ResponsiveDrivePlayer'
import VideoGallery from '../components/VideoGallery/VideoGallery'
import { dungeon_images, inventory_images } from '../assets/projects/projecteon/ProjectEon_Images'

const ProjectEon = () => {
  return (
    <PageLayout title="Project Eon">
      <ProjectHeader role="Gameplay Programmer (Team of 3)" engine="Unreal Engine 5" platform="Windows" skills={["C++", "Procedural Generation", "Rapid Prototype"]}/>
      <ResponsiveDrivePlayer url="https://drive.google.com/file/d/1PJIV-VF8WV4iy8LdJx8csiQeP1GuRdKH/preview"/>
      
      <p>
        Project Eon is a Character-Action Dungeon Crawler where the player chooses a hero from a cast of characters spanning different periods of time in order to save the universe.
        This project is inspired by games such as League of Legends, Super Smash Bros, Hades, and Enter the Gungeon. It features unique Heroes, gameplay-altering items, and a procedurally generated dungeons.
      </p>

      <p>
        The project currently uses placeholder Assets found on Fab specifically the Paragon character assets.
        This is a prototype designed to test and ensure game mechanics are functional. The project is by no means finished and we are still working on it.
      </p>

      <p>
        I implemented the gameplay mechanics demonstrated by the character in the video above. Making use of the Gameplay Ability System (GAS) which assisted in compartmentalization of actions via Abilities.
        This helped provide consistent structure to the actions where everything had a start middle and end.
      </p>
      <p>
        For example the sword attack would start off playing the animation. While the animation is playing, continously sweeps a sphere along the sword's movement path to detect hits against enemies. Once the animation is over the action ends with it.
      </p>
      <p>
        The sword-slash attack also follows the pattern but combines hit detection with physics. When the attack is performed, I play the animation and apply a large force to the character lauching them in the direction of the attack. While the character is still moving, I continously sweeping a sphere around the character to detect enemies. The action is finished when the character finishes moving.
      </p>

      <VideoGallery items={dungeon_images}/>

      <p>
        I worked on implementing a Procedural Dungeon Generator that generates a grid of Rooms, allowing the Player to navigate through the Dungeon.
        First, I focused my efforts on ensuring that the generator was generating correctly before incorporating it with other game systems.
        The Dungeon is fully connected, meaning there is a path from one room to another, making it an undirected graph.
      </p>

      <p>
        Features of the Generator
        <ul>
          <li>Data Assets are used to associate together what Levels are corresspond to which Room type.</li>
          <li>Dungeons are generated with Parameters specifying its size and how many of each Room type to generate.</li>
          <li>(Not implemented) Saving the generated Dungeon for loading purposes</li>
          <li>(Not implemented) Having multiple Dungeons generated</li>
        </ul>
      </p>

      <p>
        Generator Algorithm
        <ol>
          <li>The generation algorithm begins by selecting a random starting room in the grid.</li>
          <li>Afterwards it picks random valid direction where a potential room could be and repeats this until all rooms are generated.</li>
          <li>If the selected direction would lead to a dead end, the generator selects a random room from the list of previously generated rooms that have not been completed yet. A room is considered completed when it is surrounded either by valid rooms or an edge of the grid.</li>
          <li>The Boss room would always be added last, ensuring that it is connected to the rest of the dungeon.</li>
        </ol>
      </p>

      <VideoGallery items={inventory_images}/>

      <p>
        Inventory Item System
        <ul>
          <li>Items are completely data driven. Only need to create a new Item Definition Data Asset and any GAS related Abilities/Effects</li>
          <li>Inventory System is only to book keep what items are in the inventory. Only contains pointer references to Item Definitions</li>
          <li>Item Definition makes use of Unreal's Asset Manager which means its a specific Asset that can be queried about without having to manually manage a giant table of Items</li>
          <li>Item Actor represents in world version of the Item. Holds a pointer to the Item Definition which it then loads only the Actor portion when it needs to be seen and Gameplay during runtime.</li>
          <li>Item Actor does not need to be blueprinted and only exists in C++ because it configures its Mesh based on the loaded Item Definition</li>
        </ul>
      </p>

    </PageLayout>
  )
}

export default ProjectEon