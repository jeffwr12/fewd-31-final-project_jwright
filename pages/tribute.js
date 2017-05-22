$(document).ready(function() {

  
  var airman1Description = 'Doolittles service at Rockwell Field consisted of duty as a flight leader and gunnery instructor. At Kelly Field, he served with the 104th Aero Squadron and with the 90th Aero Squadron of the 1st Surveillance Group. His detachment of the 90th Aero Squadron was based at Eagle Pass, patrolling the Mexican border. Recommended by three officers for retention in the Air Service during demobilization at the end of the war, Doolittle qualified by examination and received a Regular Army commission as a 1st Lieutenant, Air Service, on July 1, 1920.';
 
  var airman2Description = 'McGuire would become one of the top scoring combat pilots in U.S. Air Force history. Had it not been for periodic illnesses and the heavy administrative duties as Commander, 431st Fighter Squadron (from May to December 1944), he might have become the United States leading ace. Civilian contractor Charles Lindbergh bunked with him for a time and flew as his wingman on several missions. On December 25 26, 1944, he downed seven Japanese fighter aircraft in just two days over Luzon, Philippines. With a total of 38 enemy planes destroyed to his credit in World War II.';
 
  var airman3Description = 'Betty witnessed the 7 December Japanese Imperial Navy sneak attack on Pearl Harbor from her familys home overlooking the harbor. A few months after the Pearl Harbor attack, Betty was recruited by Jackie Cochran into the effort to form the WASPs. Betty was initially turned down for training because of lack of flying hours. During her service, Betty flew all types of fighters, bombers, and other aircraft from factories to the East Coast for trans-Atlantic delivery, 36 types of aircraft in all. Betty proclaimed her favorite of all these aircraft was the North American P-51 Mustang..';
  
  var airman4Description = 'Robert Duke Cunningham was born December 8, 1941, in Los Angeles, California. After earning his bachelors degree in 1964 and his masters in education in 1965 from the University of Missouri, Cunningham began his career as an educator and a coach at Hinsdale (Ill.) High School. As a swimming coach, Duke trained two athletes to Olympic gold and silver medals.Cunningham became one of the most highly decorated U.S. Navy pilots in the Vietnam War. The first fighter ace of the war, he received the Navy Cross, two Silver Stars, fifteen Air Medals, and the Purple Heart.';
  var airman5Description = 'Preddy initially served in the Southwest Pacific Theater, flying P-40s with the 9th Pursuit Squadron, 49th Pursuit Group, which provided air defense against Japanese aircraft attacking Darwin, Australia. Preddy claimed two Japanese aircraft damaged over Darwin. He was hospitalized after a collision with another P-40. After his recovery, Preddy was reassigned to the 352nd Fighter Group in the European Theater, flying P-51s. The group flew out of RAF Bodney, England and Asch Airfield, Belgium. On August 6, 1944, Preddy claimed six German Luftwaffe fighters in a single sortie.';
  var airman6Description = 'Archer is considered by some as the first and only black U.S. pilot to earn an ace  designation, for shooting down at least five enemy aircraft. Archer was acknowledged to have shot down four planes, and he and another pilot both claimed victory for shooting down a fifth aircraft. An investigation revealed Archer had inflicted the damage that destroyed the aircraft, and the Air Force eventually proclaimed him an ace pilot. He also destroyed six aircraft on the ground during a strafing mission in August 1944, as well as several locomotives, motor transports and barges.';
  
  var airman7Description = 'Rodriguez, scored the first two air-air hits of his career in the Gulf War. His first hit occurred when he and his wingman came across two Iraqi MiG-29 Fulcrums. The two F-15s quickly locked up the MiG-29s, which turned to avoid them. However, an AWACS then reported two more MiG-29s coming in fast a mere 13 miles away. The two F-15s and two MiG-29s charged straight at each other. At the same time, the second MiG-29 locked up Rodriguez, who then quickly executed a dive down to the deck to avoid the radar lock and nearly collided with the AIM7 Sparrow fired by his wingman which destroyed the lead MiG.';
  var airman8Description = 'Robert Duke Cunningham was born December 8, 1941, in Los Angeles, California. After earning his bachelors degree in 1964 and his masters in education in 1965 from the University of Missouri, Cunningham began his career as an educator and a coach at Hinsdale (Ill.) High School. As a swimming coach, Duke trained two athletes to Olympic gold and silver medals.Cunningham became one of the most highly decorated U.S. Navy pilots in the Vietnam War. The first fighter ace of the war, he received the Navy Cross, two Silver Stars, fifteen Air Medals, and the Purple Heart.';
 
<<<<<<< HEAD
  var airman9Description = 'Preddy initially served in the Southwest Pacific Theater, flying P-40s with the 9th Pursuit Squadron, 49th Pursuit Group, which provided air defense against Japanese aircraft attacking Darwin, Australia. Preddy claimed two Japanese aircraft damaged over Darwin. He was hospitalized after a collision with another P-40. After his recovery, Preddy was reassigned to the 352nd Fighter Group in the European Theater, flying P-51s. The group flew out of RAF Bodney, England and Asch Airfield, Belgium. On August 6, 1944, Preddy claimed six German Luftwaffe fighters in a single sortie.';
=======
  var airman9Description = 'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.';
>>>>>>> origin/master


 function removeActive() {
    $('.active').removeClass('active');
    event.preventDefault();
  }

  $('.airman1').click(function() {
    removeActive();
    $(this).addClass('active');

<<<<<<< HEAD


=======
>>>>>>> origin/master
    $('#title').html('Col. James H. Doolittle ');
    $('#description').html(airman1Description);
  });

  $('.airman2').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Cpt. Thomas McGuire');
    $('#description').html(airman2Description);
  });


  $('.airman3').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Cpt. Elizabeth Bragg');
    $('#description').html(airman3Description);
  });

  $('.airman4').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Lt. Robert Cunningham');
    $('#description').html(airman4Description);
  });

  $('.airman5').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Major George Preddy ');
    $('#description').html(airman5Description);
  });

  $('.airman6').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Lt. Col. Lee Archer, Jr. ');
    $('#description').html(airman6Description);
  });

  $('.airman7').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Lt. Cesar Rodriguez');
    $('#description').html(airman7Description);
  });

  $('.airman8').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Col. James Bond');
    $('#description').html(airman7Description);
  });

  $('.airman9').click(function() {
    removeActive();
    $(this).addClass('active');

    $('#title').html('Lt. Col. Robert Smith');
    $('#description').html(airman5Description);
  });
});