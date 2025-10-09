'use client';

import Button, { ButtonVariant } from './Button';

export default function ContactForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    }).then((response) => {
      if (!response.ok) {
        console.log('Network response was not ok');
      } else {
        console.log('Form submitted successfully');
      }
    });
  };

  return (
    <form
      className="flex flex-col gap-y-8 md:max-w-4xl"
      name="contact"
      data-netlify="true"
      onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="name"
        className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
        placeholder="Full name"
      />
      <input
        type="phone"
        name="phone-number"
        className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
        placeholder="Phone number"
      />
      <input
        type="email"
        name="email"
        className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
        placeholder="Email"
      />
      <textarea
        name="message"
        className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px] h-[250px] resize-none"
        placeholder="Message"
      />
      <Button variant={ButtonVariant.Primary} className="self-end" submit>
        Submit
      </Button>
    </form>
  );
}
