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
        paragraph4: string,
        paragraph5: string,
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
        paragraph1: 'Sou desenvolvedor de software com mais de 10 anos de experiência em projetos web e corporativos, especializado nas tecnologias C#, .NET, ReactJS e soluções em nuvem com AWS.',
        paragraph2: 'Tenho paixão por resolver problemas reais através da tecnologia, com foco em performance, arquitetura limpa, usabilidade e boas práticas de desenvolvimento.',
        paragraph3: 'Atuo com APIs RESTful, integração de sistemas, front-ends modernos com React, gerenciamento de banco de dados e automação de processos. Trabalho com agilidade, comunicação clara e compromisso com entregas de qualidade.',
        paragraph4: 'Atualmente, busco oportunidades remotas que valorizem autonomia, colaboração e inovação.',
        paragraph5: 'Nos meus tempos livres, gosto de estudar mercados financeiros, explorar novas tecnologias e viajar para conhecer diferentes culturas — o que também reforça meu desejo de ter uma carreira mais flexível e internacional.'
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
        paragraph1: 'I’m a software developer with over 10 years of experience in web and enterprise applications, specializing in C#, .NET, ReactJS, and cloud solutions using AWS.',
        paragraph2: 'I’m passionate about solving real-world problems through technology, focusing on performance, clean architecture, usability, and best development practices.',
        paragraph3: 'I work with RESTful APIs, system integrations, modern front-ends using React, database management, and process automation. I value agile practices, clear communication, and high-quality deliveries.',
        paragraph4: 'I’m currently looking for remote opportunities that promote autonomy, collaboration, and innovation.',
        paragraph5: 'In my free time, I enjoy studying financial markets, exploring new technologies, and traveling to experience different cultures — which also drives my desire to build a more flexible and international career.'
      
      },
      experience:{
        title: "Professional Experience"
      },
      course: {
        title: "Courses and Academic Background"
      }
  }
};
