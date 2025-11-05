import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, Link as LinkIcon, Calendar } from "lucide-react";
import donatedGoods from "@/assets/donated-goods.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Food Box Distribution",
      description: "Receive nutritious food boxes containing essential items for your family, including fresh produce, proteins, grains, and pantry staples.",
    },
    {
      icon: Users,
      title: "Family Assistance",
      description: "Personalized support for families of all sizes, with special consideration for households with children, seniors, and individuals with dietary needs.",
    },
    {
      icon: LinkIcon,
      title: "Resource Connections",
      description: "Connect with additional community resources including healthcare services, employment assistance, housing support, and educational programs.",
    },
  ];

  const schedule = [
    { day: "Monday", time: "9:00 AM - 12:00 PM", type: "General Distribution" },
    { day: "Tuesday", time: "Closed", type: "-" },
    { day: "Wednesday", time: "2:00 PM - 5:00 PM", type: "General Distribution" },
    { day: "Thursday", time: "9:00 AM - 12:00 PM", type: "Senior & Special Needs" },
    { day: "Friday", time: "9:00 AM - 3:00 PM", type: "General Distribution" },
    { day: "Saturday", time: "8:00 AM - 11:00 AM", type: "Family Distribution" },
    { day: "Sunday", time: "Closed", type: "-" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive food assistance and community support for Tangipahoa Parish residents
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Distribution Schedule</h2>
            </div>
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-accent">
                      <tr>
                        <th className="text-left p-4 font-semibold">Day</th>
                        <th className="text-left p-4 font-semibold">Hours</th>
                        <th className="text-left p-4 font-semibold">Distribution Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((item, index) => (
                        <tr key={index} className="border-t hover:bg-accent/50 transition-colors">
                          <td className="p-4 font-medium">{item.day}</td>
                          <td className="p-4">{item.time}</td>
                          <td className="p-4">{item.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Please bring a valid ID and proof of residence in Tangipahoa Parish
            </p>
          </div>
        </div>
      </section>

      {/* Food of the Month */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Food of the Month</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={donatedGoods}
                  alt="Organized food pantry shelves"
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">November: Canned Vegetables</CardTitle>
                  <CardDescription>Help us stock our shelves for the upcoming season</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This month, we're especially seeking donations of canned vegetables to ensure families have access to nutritious meals.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Most Needed Items:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Green beans</li>
                      <li>• Corn</li>
                      <li>• Mixed vegetables</li>
                      <li>• Tomatoes</li>
                      <li>• Peas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
