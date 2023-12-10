const url = 'https://c805-136-30-19-195.ngrok-free.app/';

var dynamicCustomer = (function() {
    
    var _tableId, _table;    

    function _buildRowColumns(item) {
        var row = '<tr>';
		row += '<td>'+item["id"]+'</td>';
		row += '<td>'+item["name"]+'</td>';
		row += '<td class="u-align--right"> '+item["email"]+'</td>';
		row += '<td class="u-align--right">'+item["address"]+'</td>';
		row += '<td class="u-align--right"><button class="p-button--negative" onclick="deleteCustomer(\''+item['id']+'\')">Delete</button></td>'
        row += '</tr>';
        return row;
    }
	
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId) {
            _tableId = tableId;
            _table = $('#' + tableId);
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append) {
            if (_table.length < 1) return; //not configured.
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
            }
            return this;
        }
    };
}());

var dynamicEmployee = (function() {
    
    var _tableId, _table;    

    function _buildRowColumns(item) {
        var row = '<tr>';
		row += '<td>'+item["id"]+'</td>';
		row += '<td>'+item["name"]+'</td>';
		row += '<td class="u-align--right"> '+item["email"]+'</td>';
		row += '<td class="u-align--right">'+item["address"]+'</td>';
		row += '<td class="u-align--right">'+item["phoneNumber"]+'</td>';
		row += '<td class="u-align--right"><button class="p-button--negative" onclick="deleteEmployee(\''+item['id']+'\')">Delete</button></td>'
        row += '</tr>';
        return row;
    }
	
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId) {
            _tableId = tableId;
            _table = $('#' + tableId);
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append) {
            if (_table.length < 1) return; //not configured.
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
            }
            return this;
        }
    };
}());

var dynamicLocations = (function() {
    
    var _tableId, _table;    

    function _buildRowColumns(item) {
        var row = '<tr>';
		row += '<td>'+item["id"]+'</td>';
		row += '<td>'+item["manager"]["name"]+'</td>';
		row += '<td class="u-align--right">'+item["address"]+'</td>';
		row += '<td class="u-align--right"><button class="p-button--negative" onclick="deleteLocation(\''+item['id']+'\')">Delete</button></td>'
        row += '</tr>';
        return row;
    }
	
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId) {
            _tableId = tableId;
            _table = $('#' + tableId);
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append) {
            if (_table.length < 1) return; //not configured.
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
            }
            return this;
        }
    };
}());

var dynamicProducts = (function() {
    
    var _tableId, _table;    

    function _buildRowColumns(item) {
        var row = '<tr>';
		row += '<td>'+item["id"]+'</td>';
		row += '<td>'+item["title"]+'</td>';
		row += '<td>'+item["publisher"]+'</td>';
		row += '<td class="u-align--right">'+new Date(item["releaseDate"]).toLocaleDateString()+'</td>';
		row += '<td class="u-align--right"><button class="p-button--negative" onclick="deleteProduct(\''+item['id']+'\')">Delete</button></td>'
        row += '</tr>';
        return row;
    }
	
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId) {
            _tableId = tableId;
            _table = $('#' + tableId);
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append) {
            if (_table.length < 1) return; //not configured.
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
            }
            return this;
        }
    };
}());

var dynamicRental = (function() {
    
    var _tableId, _table;    

    function _buildRowColumns(item) {
        var row = '<tr>';
		row += '<td>'+item["id"]+'</td>';
		row += '<td>'+item["customer"]["name"]+'</td>';
		row += '<td>'+item["product"]["title"]+'</td>';
		row += '<td>'+item["cost"]+'</td>';
		row += '<td>'+new Date(item["rentalDate"]).toLocaleDateString()+'</td>';
		row += '<td>'+new Date(item["dueDate"]).toLocaleDateString()+'</td>';
		row += '<td class="p-table__cell--icon-placeholder">'+(item['returnDate'] != null ? '<i class="p-icon--success"></i> ' + new Date(item['returnDate']).toLocaleDateString() : '<i class="p-icon--error"></i>Checked Out')+'</td>';
		row += '<td class="u-align--right">'+(item['returnDate'] == null ? '<button class="p-button--positive" onclick="checkInRental(\''+item['id']+'\')">Check In</button>' : '')+'<button class="p-button--negative" onclick="deleteRental(\''+item['id']+'\')">Delete</button></td>'
        row += '</tr>';
        return row;
		// ? '<i class="p-icon--success"></i> ' + new Date(item['returnDate']).toLocaleDateString() : '<i class="p-icon--error"></i>Checked Out'
    }
	
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId) {
            _tableId = tableId;
            _table = $('#' + tableId);
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append) {
            if (_table.length < 1) return; //not configured.
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
            }
            return this;
        }
    };
}());


(function () {
  var keys = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
  };

  var direction = {
    ArrowLeft: -1,
    ArrowRight: 1,
  };

  /**
    Attaches a number of events that each trigger
    the reveal of the chosen tab content
    @param {Array} tabs an array of tabs within a container
  */
  function attachEvents(tabs) {
    tabs.forEach(function (tab, index) {
      tab.addEventListener('keyup', function (e) {
        if (e.code === keys.left || e.code === keys.right) {
          switchTabOnArrowPress(e, tabs);
        }
      });

      tab.addEventListener('click', function (e) {
        e.preventDefault();
        setActiveTab(tab, tabs);
      });

      tab.addEventListener('focus', function () {
        setActiveTab(tab, tabs);
      });

      tab.index = index;
    });
  }

  /**
    Determine which tab to show when an arrow key is pressed
    @param {KeyboardEvent} event
    @param {Array} tabs an array of tabs within a container
  */
  function switchTabOnArrowPress(event, tabs) {
    var pressed = event.code;

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left) {
          tabs[tabs.length - 1].focus();
        } else if (pressed === keys.right) {
          tabs[0].focus();
        }
      }
    }
  }

  /**
    Cycles through an array of tab elements and ensures 
    only the target tab and its content are selected
    @param {HTMLElement} tab the tab whose content will be shown
    @param {Array} tabs an array of tabs within a container
  */
  function setActiveTab(tab, tabs) {
    tabs.forEach(function (tabElement) {
      var tabContent = document.getElementById(tabElement.getAttribute('aria-controls'));

      if (tabElement === tab) {
        tabElement.setAttribute('aria-selected', true);
        tabContent.removeAttribute('hidden');
      } else {
        tabElement.setAttribute('aria-selected', false);
        tabContent.setAttribute('hidden', true);
      }
    });
  }

  /**
    Attaches events to tab links within a given parent element,
    and sets the active tab if the current hash matches the id
    of an element controlled by a tab link
    @param {String} selector class name of the element 
    containing the tabs we want to attach events to
  */
  function initTabs(selector) {
    var tabContainers = [].slice.call(document.querySelectorAll(selector));

    tabContainers.forEach(function (tabContainer) {
      var tabs = [].slice.call(tabContainer.querySelectorAll('[aria-controls]'));
      attachEvents(tabs);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTabs('[role="tablist"]');
	loadTables();

  });
})();

function loadTables() {
	var dynCt = dynamicCustomer.config('customer_table');
	fetch(url + 'customer')
	  .then((response) => response.json())
	  .then((json) => dynCt.load(json.result));
	var dynEmp = dynamicEmployee.config('employee_table');
	fetch(url + 'employee')
	  .then((response) => response.json())
	  .then((json) => dynEmp.load(json.result));
	var dynLocal = dynamicLocations.config('location_table');
		fetch(url + 'location')
		  .then((response) => response.json())
		  .then((json) => dynLocal.load(json.result));
	var dynProduct = dynamicProducts.config('product_table');
			fetch(url + 'product')
			  .then((response) => response.json())
			  .then((json) => dynProduct.load(json.result));
	var dynRent = dynamicRental.config('rental_table');
		fetch(url + 'rental')
		  .then((response) => response.json())
		  .then((json) => dynRent.load(json.result));
}

function deleteCustomer(id) {
	fetch(url + 'customer/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Customer deleted successfully:', data);
				loadTables();
                // Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}

function deleteEmployee(id) {
	fetch(url + 'employee/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Employee deleted successfully:', data);
				loadTables();
                // Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}

function deleteLocation(id) {
	fetch(url + 'location/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Location deleted successfully:', data);
				loadTables();
                // Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}

function deleteProduct(id) {
	fetch(url + 'product/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Product deleted successfully:', data);
				loadTables();
	// Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}

function deleteRental(id) {
	fetch(url + 'rental/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Rental deleted successfully:', data);
				loadTables();
                // Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}

function checkInRental(id) {
	fetch(url + 'rental/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
				body: JSON.stringify({returnDate: new Date().toISOString()}),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Rental successfully checked in:', data);
				loadTables();
                // Additional logic if needed
            })
            .catch(error => console.error('Error creating customer:', error));
}