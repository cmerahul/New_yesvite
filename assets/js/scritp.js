
// ===header-drodpdown===
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle dropdown when clicking the button
dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up
  dropdownMenu.classList.toggle("show");
});

// Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !dropdownMenu.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});

// ===header-drodpdown===
const upcomingdropdownButton = document.getElementById("upcoming-card-dropdownButton");
const upcomingdropdownMenu = document.querySelector(".upcoming-events-card-notification-info");

// Toggle dropdown when clicking the button
upcomingdropdownButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up
  upcomingdropdownMenu.classList.toggle("show");
});

// Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !upcomingdropdownMenu.contains(event.target) &&
    !upcomingdropdownButton.contains(event.target)
  ) {
    upcomingdropdownMenu.classList.remove("show");
  }
});




// ===create-post-hide-show-setting===
const createpostmainbody = document.querySelector(".create-post-main-body");
const createpostsettingmainbody = document.querySelector(".create-post-setting-main-body");
const createpostprofile = document.querySelector(".create-post-profile-wrp");
const backbtn = document.querySelector(".btn-back");

createpostprofile.addEventListener("click", () => {
    createpostmainbody.classList.add('d-none');
    createpostsettingmainbody.classList.remove('d-none');
});

backbtn.addEventListener("click", () => {
    createpostsettingmainbody.classList.add('d-none');
    createpostmainbody.classList.remove('d-none');
});


$(document).on('change', '.fileInputtype', function(event) {
  console.log(event);
  
  const files = Array.from(event.target.files);
  const imagePreview = document.getElementById('imagePreview');
  const uploadImgInner = document.querySelector('.create-post-upload-img-inner');
  const uploadHeadButton = document.querySelector('.create-post-head-upload-btn');

  const totalFiles = imagePreview.children.length + files.length;

  // Toggle visibility based on file presence
  if (files.length > 0) {
    uploadImgInner.classList.add('d-none');
    uploadHeadButton.classList.remove('d-none');
  }

  if (totalFiles > 1) {
    for (const previewItem of imagePreview.children) {
      previewItem.classList.remove('col-12');
      previewItem.classList.add('col-6');
    }
  }

  files.forEach((file) => {
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
      const previewDiv = document.createElement('div');
      previewDiv.classList.add(totalFiles === 1 ? 'col-12' : 'col-6');
      previewDiv.style.position = 'relative';

      // Create the delete icon
      const deleteIcon = document.createElement('span');
      deleteIcon.innerHTML = `
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.6665 3.31331L5.81317 2.43998C5.91984 1.80665 5.99984 1.33331 7.1265 1.33331H8.87317C9.99984 1.33331 10.0865 1.83331 10.1865 2.44665L10.3332 3.31331" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5664 6.09332L12.1331 12.8067C12.0598 13.8533 11.9998 14.6667 10.1398 14.6667H5.85977C3.99977 14.6667 3.93977 13.8533 3.86644 12.8067L3.43311 6.09332" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.88672 11H9.10672" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.3335 8.33331H9.66683" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      deleteIcon.classList.add('uploded-delete-icon');
      // Delete image functionality
      deleteIcon.addEventListener('click', function() {
        imagePreview.removeChild(previewDiv);

        // Show `create-post-upload-img-inner` and hide `create-post-head-upload-btn` if no images left
        if (imagePreview.children.length === 0) {
          uploadImgInner.classList.remove('d-none');
          uploadHeadButton.classList.add('d-none');
        }
      });

      previewDiv.appendChild(deleteIcon);

      // Display image or video based on file type
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('preview-image');
        previewDiv.appendChild(img);
      } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.src = e.target.result;
        video.controls = true;
        video.classList.add('preview-video');
        previewDiv.appendChild(video);
      }

      imagePreview.appendChild(previewDiv);
    };

    fileReader.readAsDataURL(file);
  });
});


// Add new option on click
document.querySelector('.option-add-btn').addEventListener('click', function() {
  const pollOptionsContainer = document.querySelector('.poll-options');
  const optionCount = pollOptionsContainer.children.length + 1;

  const newOption = document.createElement('div');
  newOption.classList.add('mb-3');
  
  newOption.innerHTML = `
    <label for="yourquestion" class="form-label d-flex align-items-center justify-content-between">Option ${optionCount}* <span>20/140</span></label>
    <div class="position-relative">
      <input type="text" class="form-control" id="yourquestion" placeholder="">
      <span class="input-option-delete">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.66699 3.31334L5.81366 2.44001C5.92033 1.80668 6.00033 1.33334 7.12699 1.33334H8.87366C10.0003 1.33334 10.087 1.83334 10.187 2.44668L10.3337 3.31334" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5669 6.09332L12.1336 12.8067C12.0603 13.8533 12.0003 14.6667 10.1403 14.6667H5.86026C4.00026 14.6667 3.94026 13.8533 3.86693 12.8067L3.43359 6.09332" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.88672 11H9.10672" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.33301 8.33334H9.66634" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  `;

  pollOptionsContainer.appendChild(newOption);
  
  // Add delete functionality to the newly created delete button
  const deleteBtn = newOption.querySelector('.input-option-delete');
  deleteBtn.addEventListener('click', function() {
    newOption.remove();
  });
});


// ===add-photo-vidoe-div-onclick===
const createphotobtn = document.getElementById('create-photo-btn');
const createpollbtn = document.getElementById('create-poll-btn');
const uploadphotodiv = document.querySelector('.create-post-upload-img-wrp');
const uploadpolldiv = document.querySelector('.create-post-poll-wrp');
const uploadimgdelete = document.querySelector('.upload-img-delete');
const uploadpolldelete = document.querySelector('.upload-poll-delete');

createphotobtn.addEventListener('click', function() {
  uploadphotodiv.classList.remove('d-none');
  uploadpolldiv.classList.add('d-none');
});

createpollbtn.addEventListener('click', function() {
  uploadpolldiv.classList.remove('d-none');
  uploadphotodiv.classList.add('d-none');
});

uploadimgdelete.addEventListener('click', function() {
  uploadphotodiv.classList.add('d-none');
});
uploadpolldelete.addEventListener('click', function() {
  uploadpolldiv.classList.add('d-none');
});
