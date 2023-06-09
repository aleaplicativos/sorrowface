const faceBits = [
  '.left-eye',
  '.left-pupil',
  '.left-upper-lid',
  '.left-lower-lid',
  '.right-eye',
  '.right-pupil',
  '.right-upper-lid',
  '.right-lower-lid',
  '.mouth',
  '.teeth'
]

faceBits.forEach(bit => MorphSVGPlugin.convertToPath(bit))

const faceTL = gsap.timeline({});

for(i=1; i <=2; i++) {
  faceBits.forEach(bit => {
    faceTL.to(`.face ${bit}`, {morphSVG: `#face-step-${i} ${bit}`, duration:1, ease:'none'}, i - 1)
  })
}

faceTL.to('footer', {duration: 0.3}, 2)

ScrubGSAPTimeline(faceTL);