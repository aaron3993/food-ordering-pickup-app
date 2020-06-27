

$(document).ready(() => {

  const order = {};
  // Add evt listener to + button on menu-items
  $('.add-item').each(function() {
    this.addEventListener('click', function(e) {
      const cardBody = $(e.target).parent();
      const itemId = cardBody[0].dataset.itemid;
      // If item is in order, increase its qty by one. Else, set its qty to 1
      order[itemId] ? order[itemId] += 1 : order[itemId] = 1;
      console.log(order);
    })
  })

   // Add evt listener to - button on menu-items
   $('.remove-item').each(function() {
    this.addEventListener('click', function(e) {
      const cardBody = $(e.target).parent();
      const itemId = cardBody[0].dataset.itemid;
      // If item is in order, decrease its qty by one.
      order[itemId] > 0 ? order[itemId] -= 1 : '';
      // If the item is in the order but its quantity is 0, delete it from the order
      if (order[itemId] === 0) {
        delete order[itemId];
      }
      console.log(order);
    })
  })
})