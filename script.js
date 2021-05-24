<script>
 var names= {
     "2. My Daddy, Sasanka De Silva",
     "3. My Mommy, Thilini De Silva",
     "4. Me, Jenuli De Silva",
     "5. My Sister, Amelia De Silva",
     "6. y sister and me",
     "7. My Parents",
     "8. My Family"
   
 }
 var images = {
     //add thaththi, ammi and Tinshi and me photos
     "Daddy's photo.jpg",
     "",
     "My Photo.jpg",
     "Amelia's photo.jpg",
     "Me and Tinshi's photo.jpg",
     "Mommy and Daddy Photo.jpg",
     "My Family Photo.jpg"

 }
 var 1 = 0;
 function update()
 {
     i++
     var numbers_of_family_members_in_array = 5
     if(i > numbers_of_family_members_in_array )
     {
         i = 0;
     }
 }
 var updatedImage = images[i];
 var updatedName = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_image").src = updateName;
}

 </script>


