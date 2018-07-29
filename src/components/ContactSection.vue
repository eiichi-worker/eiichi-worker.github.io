<template>
  <div
    id="contact"
    class="text-center">
    <div class="container">
      <div class="section-title center">
        <h2>Contact</h2>
        <hr>
      </div>
      <div class="col-md-8 col-md-offset-2">
        <div class="col-md-4"> <i class="fa fa-map-marker fa-2x"/>
          <p>4321 California St,<br>
            San Francisco, CA 12345</p>
        </div>
        <div class="col-md-4"> <i class="fa fa-envelope-o fa-2x"/>
          <p>info@company.com</p>
        </div>
        <div class="col-md-4"> <i class="fa fa-phone fa-2x"/>
          <p> +1 123 456 1234</p>
        </div>
        <div class="clearfix"/>
      </div>
      <div class="col-md-8 col-md-offset-2">
        <h3>Leave me a message</h3>
        <form
          id="contactForm"
          name="sentMessage"
          novalidate>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  required="required">
                <p class="help-block text-danger"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required="required">
                <p class="help-block text-danger"/>
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea
              id="message"
              name="message"
              class="form-control"
              rows="4"
              placeholder="Message"
              required/>
            <p class="help-block text-danger"/>
          </div>
          <div id="success"/>
          <button
            type="submit"
            class="btn btn-default">Send Message</button>
        </form>
        <div class="social">
          <ul>
            <li><a href="#"><i class="fa fa-facebook"/></a></li>
            <li><a href="#"><i class="fa fa-twitter"/></a></li>
            <li><a href="#"><i class="fa fa-dribbble"/></a></li>
            <li><a href="#"><i class="fa fa-github"/></a></li>
            <li><a href="#"><i class="fa fa-instagram"/></a></li>
            <li><a href="#"><i class="fa fa-linkedin"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
