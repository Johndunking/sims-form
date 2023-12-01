import React, { useState } from 'react';
import Cico from '../CICO/Cico'; // Import your components here
import Cp from '../CP/Cp';
import BC from '../BC/BehaviorContract';
import Ppr from '../PPR/Ppr'
import Shn from '../SHN/Shn'
import Sg from '../SG-SET/Sg'
import Sm from '../SM/Sm';
import Reasses from '../Reasses/Reasses';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



const FormComponent = () => {
  const [formData, setFormData] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
    value10: 0,
    value11: 0,
    value12: 0,
    value13: 0,
    value14: 0,
    value15: 0,
    value16: 0,
    value17: 0,
    value18: 0,
    value19: 0,
    value20: 0,
    value21: 0,
  });

  const [showCico, setShowCico] = useState(false);
  const [showBC, setShowBC] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showCp, setShowCp] = useState(false);
  const [showPpr, setShowPpr] = useState(false);
  const [showSg, setShowSg] = useState(false);
  const [showShn, setShowShn] = useState(false);
  const [showSm, setShowSm] = useState(false);
  const [showReasses, setShowReasses] = useState(false);
  // Add state variables for other components as needed

  const groupNames = ['The SIM-Form is designed to match Tier 2 interventions to students identified as emotionally or behaviorally at-risk by the universal screening process. A teacher, administrator, or team who is familiar with the student should complete the SIM. This form includes statements assessing a variety of student characteristics that align well with the active ingredients of evidence-based Tier 2 interventions. Each of the below items is rated on a 4-point scale ranging from Untrue to Very True. For statements that you don’t know, simply check the box that indicates so. Your answers will then be scored to determine which evidence-based Tier 2 intervention, or interventions, should be considered for implementation to address the student’s emotional and behavioral needs.', '', '', '', '', '', ''];


   const questions = [
    ['Student seeks and likes attention from adults.', 'Student could benefit from having a positive adult role model outside of the home.', 'Student could benefit from starting the day off on a good note and ending the day with praise or feedback.'],
    ['Student is eager to earn rewards or access to privileges.', 'With the right incentive, the students behavior likely will improve.', 'Student can behave well when s/he wants to or the appropriate incentive is available (e.g., recess, computer time, field trip, etc.)'],
    ['Student seems to exhibit disruptive classroom behavior to get out of doing academic work', 'Student is able to only work for small periods of time before engaging in off-task behaviors', 'QStudent academic skills are low and, as a result, frequently takes his/her own breaks during instruction or learning'],
    ['Student is rejected or isolated by peers', 'Student withdrawals from social situations and spends most of free time alone', 'Student could benefit from having other students say nice things about him/her'],
    ['Student has difficulty managing emotions in response to situations that arise in school', 'Student tires some times but lacks social and/or emotional skills to be successful', 'Student tries to do better socially and emotionally but appears to lack social or emotional skills to do so (i.e., can’t do problem)'],
    ['Student is unaffected by warnings or typical school disciplinary practices(loss of privilege, reprimand, removal from class, etc.)', 'School has a good relationship with the student’s parents', 'Student’s parents are open and willing to collaborate with the school'],
    ['Student’s problem behavior happens numerous times throughout the day and requires constant redirections', 'Student has difficulty concentrating and staying focused until completing a task', 'Student needs constant reminders to stay on-task'],
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the sum of each group of 3 values
    const sumGroup1 = formData.value1 + formData.value2 + formData.value3;
    const sumGroup2 = formData.value4 + formData.value5 + formData.value6;
    const sumGroup3 = formData.value7 + formData.value8 + formData.value9;
    const sumGroup4 = formData.value10 + formData.value11 + formData.value12;
    const sumGroup5 = formData.value13 + formData.value14 + formData.value15;
    const sumGroup6 = formData.value16 + formData.value17 + formData.value18;
    const sumGroup7 = formData.value19 + formData.value20 + formData.value21;
    // ... Repeat for the rest of the groups

    // Add logic to set state variables based on the sum of each group
   
    setShowCico(sumGroup1 >= 6);
    setShowBC(sumGroup2 >= 6);
    setShowCp(sumGroup3 >= 6);
    setShowPpr(sumGroup4 >= 6);
    setShowSg(sumGroup5 >= 6);
    setShowShn(sumGroup6 >= 6);
    setShowSm(sumGroup7 >= 6);
    setShowForm(false);
    // Set state variables for other components as needed

    if (!(sumGroup1 >= 6 || sumGroup2 >= 6 || sumGroup3 >= 6 || sumGroup4 >= 6 || sumGroup5 >= 6 || sumGroup6 >= 6 || sumGroup7 >= 6)) {
      setShowReasses(true);
  };
  }
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: parseInt(value, 10),
    });
  };

  return (
    <div> 
      <h1 className='text-center p-2'>STUDENT INTERVENTION MATCHING FORM (SIM-Form)</h1> 
    <Container className="loaded-components-container d-flex flex-wrap justify-content-center">  
      {showForm && (
        <form onSubmit={handleSubmit} className="border p-4 rounded">
          {groupNames.map((groupName, groupIndex) => (
            <div key={groupIndex}>
              <div className='text-center'>
              <label className='text-center mx-auto'><h4 className='Description'>{groupName}</h4></label>
              </div>
              <br />
              {[1, 2, 3].map((inputIndex) => (
                <Row key={inputIndex} className="mb-2">
                  <Col xs={6}>
                    <label>{questions[groupIndex][inputIndex - 1]}</label>
                  </Col>
                  <Col xs={6}>
                    <select
                      name={`value${groupIndex * 3 + inputIndex}`}
                      value={formData[`value${groupIndex * 3 + inputIndex}`]}
                      onChange={(e) => handleInputChange(`value${groupIndex * 3 + inputIndex}`, e.target.value)}
                      className="form-control"
                    >
                      <option value={0}></option>
                      <option value={0}>Very Untrue/ I don't know</option>
                      <option value={1}>Untrue</option>
                      <option value={2}>True</option>
                      <option value={3}>Very true</option>
                    </select>
                  </Col>
                </Row>
              ))}
            </div>
          ))}
          <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">
            Submit
          </button>

        </form>
      )}

      {/* Use the Bootstrap grid system to create an equal grid */}
      <Row className="equal-grid img-fluid">
        {showCico && ( <Cico />
        )}
        {showBC && ( <BC />
        )}
        {showCp && (
            <Cp />
        )}
        {showPpr && (
            <Ppr />
        )}
        {showShn && (
            <Shn />
        )}
        {showSg && (
            <Sg />
        )}
        {showSm && (
            <Sm />
        )}
        {showReasses && (
          <Reasses/>
        )}
      </Row>
    </Container>
    </div>
  );
};

export default FormComponent;
