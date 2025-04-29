import { Language } from './types';

export const translations: Record<Language, {
    contact: {
        title: string;
        name: string;
        email: string;
        message: string;
        send: string;
        success: string;
        error: string;
      },
      about:{
        title: string,
        paragraph1: string,
        paragraph2: string,
        paragraph3: string,
      },
      experience:{
        title: string
      }
      course:{
        title:string
      }
}> = {
  pt: {
    contact: {
        title: 'Entre em Contato',
        name: 'Seu Nome',
        email: 'Seu E-mail',
        message: 'Sua Mensagem',
        send: 'Enviar',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar a mensagem. Tente novamente.',
      },
      about: {
        title: 'Sobre Mim',
        paragraph1: 'Sou desenvolvedor de software com mais de 10 anos de experiência...',
        paragraph2: 'Tenho especialização em C#, trabalho com React, Node, Python e AWS.',
        paragraph3: 'Estou sempre em busca de novos desafios e oportunidades para crescer.',
      },
      experience:{
        title: "Experiência Profissional"
      },
      course: {
        title: "Cursos e Formação Acadêmica"
      }
  },
  en: {
    contact: {
        title: 'Contact Me',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      about: {
        title: 'About Me',
        paragraph1: 'I’m a software developer with over 10 years of experience...',
        paragraph2: 'I specialize in C#, and also work with React, Node, Python and AWS.',
        paragraph3: 'I’m always looking for new challenges and opportunities to grow.',
      },
      experience:{
        title: "Professional Experience"
      },
      course: {
        title: "Courses and Academic Background"
      }
  }
};
