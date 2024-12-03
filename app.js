function carousel() {
  let carouselStorage = [
    "./images/img11.jpg",
    "./images/img12.jpg",
    "./images/img13.jpg",
    "./images/img14.jpg",
  ];

  let myImage = document.querySelector("#carousel > img");

  let myPreviousBtn = document.querySelector(".previous");
  let myNextBtn = document.querySelector(".next");
  let carouselIndex = 0;

  console.log(myImage, myPreviousBtn, myNextBtn);

  myPreviousBtn.addEventListener("click", () => {
    carouselIndex--;
    if (carouselIndex < 0) {
      carouselIndex = carouselStorage.length - 1;
    }

    console.log(carouselIndex);

    myImage.src = carouselStorage[carouselIndex];
  });
  myNextBtn.addEventListener("click", () => {
    carouselIndex++;
    if (carouselIndex >= carouselStorage.length) {
      carouselIndex = 0;
    }

    console.log(carouselIndex);

    myImage.src = carouselStorage[carouselIndex];
  });
}

carousel();

function students() {
  let myTbody = document.querySelector("tbody");

  class StudentsDetail {
    constructor(name, age, gender, address, Phone, image) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.Phone = Phone;
      this.image = image;
    }
  }
  let allStudents = [
    new StudentsDetail(
      "Milind Shimpi",
      17,
      "Male",
      "Thane",
      9876543210,
      "./images/image1.jpg"
    ),
    new StudentsDetail(
      "Suresh Raina",
      19,
      "Male",
      "Kalyan",
      7894561230,
      "./images/image2.jpg"
    ),
    new StudentsDetail(
      "Swapnali Pali",
      20,
      "Female",
      "Navi Mumbai",
      8794561230,
      "./images/iamge4.jpg"
    ),
    new StudentsDetail(
      "Kavita Kale",
      22,
      "Female",
      "Pune",
      6987451230,
      "./images/iamge5.jpg"
    ),
    new StudentsDetail(
      "Kaustubh Gaikwad",
      18,
      "Male",
      "Goa",
      7410236589,
      "./images/image3.jpg"
    ),
    new StudentsDetail(
      "Virat Koli",
      21,
      "Male",
      "Chennai",
      6541230789,
      "./images/image10.jpg"
    ),
    new StudentsDetail(
      "Sakshi Sapkale",
      20,
      "Female",
      "Mumbai",
      9871230456,
      "./images/image6.jpg"
    ),
    new StudentsDetail(
      "Savita Kadu",
      16,
      "Female",
      "Thane",
      7890123456,
      "./images/image7.jpg"
    ),
    new StudentsDetail(
      "Hemangi Shane",
      19,
      "Female",
      "Vashi",
      6123457980,
      "./images/image8.jpg"
    ),
    new StudentsDetail(
      "Sanika Surve",
      19,
      "Female",
      "Navi mumbai",
      7894562230,
      "./images/image9.jpg"
    ),
  ];

  function studentsDisplay(dis) {
    this.forEach((e) => {
      let td1 = document.createElement("td");
      td1.innerHTML = e.name;
      let td2 = document.createElement("td");
      td2.innerHTML = e.age;
      let td3 = document.createElement("td");
      td3.innerHTML = e.gender;
      let td4 = document.createElement("td");
      td4.innerHTML = e.address;
      let td5 = document.createElement("td");
      td5.innerHTML = e.Phone;

      let tr = document.createElement("tr");
      tr.append(td1, td2, td3, td4, td5);
      dis.append(tr);
    });
  }

  studentsDisplay.call(allStudents, myTbody);

  let topRsult = document.querySelector("#top-students");

  let topStudents = allStudents.filter((e) => (e.age >= 15 ? e : false));
  console.log(topStudents);

  function DisplayTopStudents() {
    // Get the container where the top students will be displayed
    const topRsult = document.querySelector("#top-students");
    
    // Create a wrapper div for scrolling
    const topStudentsWrapper = document.createElement('div');
    topStudentsWrapper.classList.add('students-wrapper');
    
    // Loop through the students and create tiles
    topStudents.forEach((e) => {
      let myImg = document.createElement("img");
      myImg.src = e.image;
  
      let myDiv = document.createElement("div");
      myDiv.classList.add('student-tile');  // Add a class for styling
  
      let myName = document.createElement("h2");
      myName.innerHTML = `Name :${e.name}`;
  
      let myAge = document.createElement("h2");
      myAge.innerHTML = `Age :${e.age}`;
  
      myDiv.append(myImg, myName, myAge);
      
      topStudentsWrapper.appendChild(myDiv);  // Append each student tile to the wrapper
    });
  
    // Append the wrapper to the main container
    topRsult.appendChild(topStudentsWrapper);
  }

  DisplayTopStudents();
}

students();

function formValidation() {
  let myInput = document.querySelectorAll("form input");

  myInput.forEach((e) => {
    e.addEventListener("focus", function () {
      e.classList.add("focused");
      console.log("focus");
    });
    e.addEventListener("blur", () => {
      e.classList.remove("focused");

      console.log("blur");
    });
  });
}


const headerHeight = document.querySelector('header').offsetHeight;

function scrollToSection(selector) {
  const targetSection = document.querySelector(selector);
  const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY; // Get the section's position relative to the page
  const offset = 70; // Distance to stop 70px above

  // Scroll to the section with an offset
  window.scrollTo({
    top: sectionTop - offset, // Subtract the offset to stop 70px above the section
    behavior: 'smooth'
  });
}

document.querySelector('a[href="#contact_us"]').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('#contact_us');
});

document.querySelector('a[href="#about_us"]').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('#about_us');
});

document.querySelector('a[href="#services"]').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('#services');
});

document.querySelector('a[href="#carousel"]').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('#carousel');
});

formValidation();
