<script>
    let emailAddress
    let schoolName
</script>

<div class="notification" style="background-color=">
    <div class="columns">
        <div class="column">
            <div class="content">
            <h1>Publish Your School Meal Menus</h1>
            <p>
            We help you publish your weekly school meal menus and provide
        them to students
          </p>
          <p>Set the details and hit publish! Register and get started today</p>
        </div>
    </div>

<div class="column">
    <div class="content">
        <h3>Register Now</h3>
        <div class="field">
            <label class="label">Email Address</label>
            <div class="control">
                <input
                bind:value={emailAddress}
                type="text"
                placeholder="Enter your email address"
                class="input"/>
            </div>
        </div>
        <div class="field">
            <label class="label">School Name</label>
            <div class="control">
                <input
                bind:value={schoolName}
                type="text"
                placeholder="Enter your school name"
                class="input"/>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link is-outlined">GO</button>
            </div>
        </div>
        </div>
    </div>
</div>
</div>

<div class="container">
    <div class="content" style="line-height: 30px;">
        <center>
            <h3><span>Already registered?</span></h3>
            <button class="button  is-link is-outlined" style="height: 35px;">Login</button>
        </center>
    </div>
</div>
