let skills = document.getElementsByClassName('skill');
let focusedSkill = null;


for(let i = 0; i < skills.length; i++) {
  skills[i].addEventListener('mouseover', function() {
    let skillName = this.children[0].getAttribute('data-skill-name');
    let skillLevel = this.children[0].getAttribute('data-skill-progress');

    modifySelectedSkill(skillName, skillLevel);
  });

  skills[i].addEventListener('click', function() {
    if (focusedSkill) {
        focusedSkill.classList.remove('focused');
    }

    focusedSkill = this;
    focusedSkill.classList.add('focused');

    let skillName = focusedSkill.children[0].getAttribute('data-skill-name');
    let skillLevel = focusedSkill.children[0].getAttribute('data-skill-progress');

    modifySelectedSkill(skillName, skillLevel);
  });

  skills[i].addEventListener('mouseout', function() {
    let skillName = focusedSkill.children[0].getAttribute('data-skill-name');
    let skillLevel = focusedSkill.children[0].getAttribute('data-skill-progress');

    modifySelectedSkill(skillName, skillLevel);
  });
}

function modifySelectedSkill(skillName, skillLevel) {
  let selectedSkillName = document.getElementById('selected-skill-name');
  let selectedSkillLevel = document.getElementById('selected-skill-progress');

  selectedSkillName.textContent = skillName;
  selectedSkillLevel.value = skillLevel;
}

window.onload = function() {
  let javaSkill = document.querySelector('[data-skill-name="Java"]');
  if (javaSkill) {
    let clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    javaSkill.dispatchEvent(clickEvent);
  }
};