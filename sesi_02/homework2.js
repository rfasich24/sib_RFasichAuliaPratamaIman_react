
const videoData = [
    {
        name: 'Miss Scarlet', 
        present: true, 
        rooms: [
            {kitchen: false}, 
            {ballroom: false}, 
            {conservatory: false}, 
            {'dining room': false}, 
            {'billiard room': false}, 
            {library: false}
        ]
    },
    {
        name: 'Mrs. White', 
        present: false, 
        rooms: [
            {kitchen: false}, 
            {ballroom: false}, 
            {conservatorv: false},
            {'dining room': false}, 
            {'billiard room': false}, 
            {library: false}
        ]
    },
    {
        name: 'Reverend Green', 
        present: true, 
        rooms: [
            {Kitchen: false}, 
            {ballroom: false}, 
            {conservatory: false}, 
            {'dining room': false}, 
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false, 
        rooms: [
            {kitchen: false}, 
            {ballroom: false}, 
            {conservatory: false}, 
            {'dining room': false}, 
            {'billiard room': false}, 
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard', 
        present: true, 
        rooms: [
            {Kitchen: false}, 
            {ballroom: false}, 
            {conservatory: false}, 
            {'dining room': false}, 
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum', 
        present: true, 
        rooms: [
            {kitchen: false}, 
            {ballroom: false}, 
            {conservatory: false}, 
            {'dining room': false}, 
            {'billiard room': false}, 
            {library: false}
        ]
    }
];

let video = videoData.filter((dataVideo) => dataVideo.present === true);
console.log(video);
