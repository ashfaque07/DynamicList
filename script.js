window.onload = function () {

		const countryList = {
			India : {
				Istate1:{zipcode:12,zipcode:13,zipcode:15},
				Istate2:{zipcode:16,zipcode:17,zipcode:18},
				Istate3:{zipcode:19,zipcode:20,zipcode:21},
				Istate4:{zipcode:22,zipcode:23,zipcode:24}
			},
			USA : {
				Ustate1:{zipcode:25,zipcode:26,zipcode:27},
				Ustate2:{zipcode:28,zipcode:29,zipcode:30},
				Ustate3:{zipcode:31,zipcode:32,zipcode:33},
				Ustate4:{zipcode:34,zipcode:35,zipcode:36}
			}
		}
		var countryListItem = document.getElementById('countryList');
		var stateListItem = document.getElementById('stateList');
		var zipcodeListItem = document.getElementById('zipcodeList');
		const keys = Object.keys(countryList);
			for (const key of keys) {
      		let option = document.createElement('option');
        	option.text = option.value = key;
        	countryListItem.add(option, 1);
			}
			countryListItem.addEventListener('change', function(){
					var strUser = countryListItem.options[countryListItem.selectedIndex].text;
		  		  stateListItem.options.length=0;
			for (var key in countryList) {
  		  // skip loop if the property is from prototype
  		  if (!countryList.hasOwnProperty(key)) continue;
		
		  		  var obj = countryList[key];
		  		  for (var prop in obj) {
		  		      // skip loop if the property is from prototype
		  		      if (!obj.hasOwnProperty(prop)) continue;
		  		      // your code
		  		      if (key==countryListItem.options[countryListItem.selectedIndex].text) {
      						let option = document.createElement('option');
        					option.text = option.value = prop;
        					stateListItem.add(option, 0);
		  		      }
		  		      if ("Select Country"==countryListItem.options[countryListItem.selectedIndex].text) {
      						let option = document.createElement('option');
        					option.text = option.value = "Select state";
		  		  			stateListItem.options.length=0;
        					stateListItem.add(option, 0);
		  		      }
		  		  }
			}

			});

			// Zipcode list code

			stateListItem.addEventListener('change', function(){
					var strUser = stateListItem.options[stateListItem.selectedIndex].text;
		  		  // zipcodeListItem.options.length=0;
				for (var key in countryList) {
	  		  // skip loop if the property is from prototype
	  		  if (!countryList.hasOwnProperty(key)) continue;
			
			  		  var obj = countryList[key];
			  		  for (var prop in obj) {
			  		      // skip loop if the property is from prototype
			  		      if (!obj.hasOwnProperty(prop)) continue;
			  		      var temp = obj[prop];
				  		  		for (var prop in obj) {

				  		  		}
			  		      // console.log(stateListItem.options[stateListItem.selectedIndex].text);
			  		      // console.log(prop + " = " + obj[key]);
			  		      if (key==stateListItem.options[stateListItem.selectedIndex].text) {
	      						let option = document.createElement('option');
	        					option.text = option.value = obj[prop];
	        					zipcodeListItem.add(option, 0);
			  		      }
			  		      if ("Select Country"==stateListItem.options[stateListItem.selectedIndex].text) {
	      						let option = document.createElement('option');
	        					option.text = option.value = "Select zipcode";
			  		  			zipcodeListItem.options.length=0;
	        					zipcodeListItem.add(option, 0);
			  		      }
			  		  }
				}

			});
};