var generator = require("../generate");

generator.generate({
  poster_path: "../poster.svg",
  title: "PCB Design Workshop",
  description: `Learn to design PCBs! Join us in this session where we'll
go over footprints, schematics, layouts, popular pcb
packages and how to order PCBs online!`,
  location: 'JEC 1234',
  time: '6pm',
  event_date: "10/15",
  takedown: '10/15'
});
