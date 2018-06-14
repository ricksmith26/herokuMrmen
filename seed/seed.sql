DROP DATABASE IF EXISTS mr_men;
CREATE DATABASE mr_men;

\c mr_men;

CREATE TABLE men (
  man_name VARCHAR,
  man_url VARCHAR,
  emotion VARCHAR
  );

  INSERT INTO men (man_name, man_url, emotion) VALUES ("Mr Angry", "https://pbs.twimg.com/profile_images/929481680926269443/JR1hw-9n_400x400.jpg", "Anger"),
  ("Mr Worry", "https://vignette.wikia.nocookie.net/mrmen/images/1/10/Mr-worry-2a.jpeg/revision/latest?cb=20170519064622", "Fear"),
  ("Mr Happy", "https://shop.mrmen.com/wp-content/themes/mrmen/assets/characterpic-square-mr%20happy.jpg", "Joy"),
  ("Mr Sad", "https://vignette.wikia.nocookie.net/mrmen/images/e/e9/Mr._Miserable.PNG/revision/latest?cb=20110524232526", "Sadness"),
  ("Mr Mean", "https://vignette.wikia.nocookie.net/mrmen/images/8/87/Mr_Mean_2A.jpg/revision/latest?cb=20170527183436", "Distgust");
