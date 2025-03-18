import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name: string;
  photo: string;
  rating: number;
  testimonial: string;
  location: string;
}

interface TestimonialsCarouselProps {
  testimonials?: TestimonialProps[];
}

const TestimonialsCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialsCarouselProps) => {
  return (
    <section className="w-full py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Descubra por que tantas famílias escolheram nossos serviços para
            encontrar o lar perfeito no Cambuci.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-white text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800" />
            <CarouselNext className="-right-4 bg-white text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col border border-blue-100 transition-transform hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-orange-400">
          <img
            src={testimonial.photo}
            alt={`Foto de ${testimonial.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-blue-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < testimonial.rating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic flex-grow">
        "{testimonial.testimonial}"
      </p>
    </div>
  );
};

const defaultTestimonials: TestimonialProps[] = [
  {
    name: "Ana Silva",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    rating: 5,
    testimonial:
      "Encontrei meu apartamento perfeito no Cambuci graças à equipe incrível. O processo foi rápido e sem complicações. Recomendo a todos!",
    location: "Cambuci, São Paulo",
  },
  {
    name: "Carlos Oliveira",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    rating: 4,
    testimonial:
      "Excelente atendimento e profissionalismo. Consegui um ótimo negócio em um prédio novo da região. Estou muito satisfeito com minha escolha.",
    location: "Cambuci, São Paulo",
  },
  {
    name: "Mariana Costa",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana",
    rating: 5,
    testimonial:
      "Depois de meses procurando, finalmente encontrei meu lar ideal no Cambuci com a ajuda desta imobiliária. O corretor entendeu exatamente o que eu precisava!",
    location: "Cambuci, São Paulo",
  },
  {
    name: "Pedro Santos",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    rating: 5,
    testimonial:
      "Processo transparente do início ao fim. Encontrei um apartamento com excelente custo-benefício e localização privilegiada no bairro.",
    location: "Cambuci, São Paulo",
  },
  {
    name: "Juliana Mendes",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    rating: 4,
    testimonial:
      "Atendimento personalizado e profissionais que realmente conhecem o mercado imobiliário do Cambuci. Estou muito feliz com minha nova casa!",
    location: "Cambuci, São Paulo",
  },
];

export default TestimonialsCarousel;
