var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (li_value == "oneplus") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "registration") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });

}


  var list1 = [];
  var list2 = [];
  var list3 = [];
  var list4 = [];
  var list5 = [];
  var list6 = [];
  var list7 = [];
  var rb1
  var rb2
  var n = 1;
  var x = 0;

  function AddRow() {
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);
    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    if (!(list1[x]) || !(list2[x])) {
      alert("Enter the Name correctly");
      return;
    }

    list3[x] = document.getElementById("email").value;
    var em = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+)\.([a-zA-Z0-9\.-]+)/
    if (!em.test(list3[x])) {
      alert("Enter the email correctly");
      document.getElementById("email").value = ''
      return;
    }

    list4[x] = document.getElementById("age").value;
    list5[x] = document.getElementById("model").value;
    if (isNaN(list4[x])) {
      alert("Age cannot be " + list4[x] + "!!\n Enter Numeric values only!!");
      document.getElementById('age').value = '';
      return;
    }
    list6[x] = document.getElementById("quantity").value;
    if (isNaN(list6[x])) {
      alert(" Quantity cannot be " + list6[x] + "!!\n Enter Numeric values only!!");
      document.getElementById('age').value = '';
      return;
    }

    rb1 = document.getElementById("op")
    rb2 = document.getElementById("COD")
    if (rb1.checked == true) {
      list7[x] = rb1.value;
    }
    else if (rb2.checked == true) {
      list7[x] = rb2.value;
    }
    else {
      alert("Please Select Payment Option");
      return;
    }



    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];



    n++;
    x++;
  }



