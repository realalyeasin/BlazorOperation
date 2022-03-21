using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlazorOperationModel.BlazorOperationModels
{
    public class CollectionClass
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public double Price { get; set; }
        public bool IsActive { get; set; }
        public List<CollectionPropertyClass> CollectionProperty { get; set; }
    }
}
