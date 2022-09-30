const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    animation: 150,
    chosenclass: "sortable-chosen",
    dragClass: "sortable-drag",
});

