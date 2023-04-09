<template>
    <footer class="footer">
        <div class="container">
            <div class="flex justify-center">
                <div class="w-1/2 text-center">
                    <p>&copy; 2023 Oyebola Feranmi. All rights reserved.</p>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-1/2 text-center">
                    <ul class="inline-block">
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-1/2 text-center">
                    <p>Contact Me:</p>
                    <form @submit.prevent="sendEmail">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" v-model="name">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" v-model="email">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" v-model="message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterSection',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            // Use an email service to send the email
            // Here we can use a fake email service to simulate sending the email
            console.log(`Sending email to ${this.email}`);
            console.log(`Name: ${this.name}`);
            console.log(`Message: ${this.message}`);
            this.name = '';
            this.email = '';
            this.message = '';
            alert('Thank you for contacting me! Your message has been sent.');
        }
    }
}
</script>

<style>
.footer {
    background-color: #333333;
    padding: 2rem;
}

.footer form label {
    display: block;
    margin-bottom: 0.5rem;
}

.footer form input[type="text"],
.footer form input[type="email"],
.footer form textarea {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
}

.footer form textarea {
    resize: none;
    height: 10rem;
}

.footer form button[type="submit"] {
    background-color: #4B5563;
    border: none;
    border-radius: 0.25rem;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease-in-out;
}

.footer form button[type="submit"]:hover {
    background-color: #1F2937;
}
</style>
